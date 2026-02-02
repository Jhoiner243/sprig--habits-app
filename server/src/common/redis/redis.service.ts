import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Habit } from '../../habits/entities/habit.entity';
import {
    CacheInvalidationConfig,
    REDIS_KEYS,
    RedisLockOptions,
    RedisMessage,
    RedisSubscriber
} from './redis.types';

@Injectable()
export class RedisService {
  private readonly logger = new Logger(RedisService.name);

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  // ========== BASIC OPERATIONS ==========

  /**
   * Get value from cache
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      const value = await this.cacheManager.get<T>(key);
      return value ?? null;
    } catch (error) {
      this.logger.error(`Error getting key ${key}:`, error);
      return null;
    }
  }

  /**
   * Set value in cache with optional TTL
   */
  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    try {
      await this.cacheManager.set(key, value, ttl);
      this.logger.debug(`Set key ${key} with TTL ${ttl || 'default'}`);
    } catch (error) {
      this.logger.error(`Error setting key ${key}:`, error);
    }
  }

  /**
   * Delete key(s) from cache
   */
  async del(key: string | string[]): Promise<void> {
    try {
      const keys = Array.isArray(key) ? key : [key];
      await Promise.all(keys.map((k) => this.cacheManager.del(k)));
      this.logger.debug(`Deleted keys: ${keys.join(', ')}`);
    } catch (error) {
      this.logger.error(`Error deleting keys:`, error);
    }
  }

  /**
   * Clear all cache
   */
  async clear(): Promise<void> {
    try {
      await this.cacheManager.clear();
      this.logger.debug('Cache cleared');
    } catch (error) {
      this.logger.error('Error clearing cache:', error);
    }
  }

  /**
   * Check if key exists
   */
  async exists(key: string): Promise<boolean> {
    try {
      const value = await this.cacheManager.get(key);
      return value !== undefined && value !== null;
    } catch (error) {
      this.logger.error(`Error checking existence of key ${key}:`, error);
      return false;
    }
  }

  /**
   * Set expiration for existing key
   */
  async expire(key: string, ttl: number): Promise<void> {
    // Note: Cache-Manager doesn't have native expire, so we simulate it
    const value = await this.get(key);
    if (value !== null) {
      await this.set(key, value, ttl);
    }
  }

  /**
   * Get TTL of key
   */
  async ttl(key: string): Promise<number> {
    // Note: Cache-Manager doesn't have native TTL, this is approximate
    return -1; // Indicates key exists with no expiration
  }

  // ========== ADVANCED PATTERNS ==========

  /**
   * Get from cache or set with fetcher function
   */
  async getOrSet<T>(
    key: string,
    fetcher: () => Promise<T>,
    ttl?: number,
  ): Promise<T> {
    const cached = await this.get<T>(key);

    if (cached !== null) {
      return cached;
    }

    const data = await fetcher();
    await this.set(key, data, ttl);
    return data;
  }

  /**
   * Invalidate cache by pattern
   */
  async invalidatePattern(pattern: string): Promise<void> {
    // Note: With cache-manager, pattern-based invalidation is limited
    // For full Redis implementation, you would use RedisClient directly
    this.logger.warn(
      `Pattern invalidation not fully supported with cache-manager: ${pattern}`,
    );
    await this.clear();
  }

  /**
   * Batch get operations
   */
  async mget<T>(keys: string[]): Promise<(T | null)[]> {
    return Promise.all(keys.map((key) => this.get<T>(key)));
  }

  /**
   * Batch set operations
   */
  async mset<T>(entries: Record<string, T>, ttl?: number): Promise<void> {
    const promises = Object.entries(entries).map(([key, value]) =>
      this.set(key, value, ttl),
    );
    await Promise.all(promises);
  }

  // ========== DISTRIBUTED LOCKS ==========

  /**
   * Acquire distributed lock
   */
  async acquireLock(
    key: string,
    options: RedisLockOptions = {},
  ): Promise<string | null> {
    const { ttl = 30, retryDelay = 100, maxRetries = 3 } = options;
    const lockKey = `lock:${key}`;
    const lockValue = `${Date.now()}-${Math.random()}`;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const exists = await this.exists(lockKey);

      if (!exists) {
        await this.set(lockKey, lockValue, ttl);
        this.logger.debug(`Acquired lock: ${lockKey}`);
        return lockValue;
      }

      if (attempt < maxRetries - 1) {
        await this.sleep(retryDelay);
      }
    }

    this.logger.warn(`Failed to acquire lock: ${lockKey}`);
    return null;
  }

  /**
   * Release distributed lock
   */
  async releaseLock(key: string, lockValue: string): Promise<boolean> {
    const lockKey = `lock:${key}`;

    try {
      const currentValue = await this.get<string>(lockKey);

      if (currentValue === lockValue) {
        await this.del(lockKey);
        this.logger.debug(`Released lock: ${lockKey}`);
        return true;
      }

      this.logger.warn(`Lock release failed - value mismatch: ${lockKey}`);
      return false;
    } catch (error) {
      this.logger.error(`Error releasing lock ${lockKey}:`, error);
      return false;
    }
  }

  // ========== PUB/SUB (Simplified Implementation) ==========

  /**
   * Publish message to channel
   */
  async publish(channel: string, message: any): Promise<void> {
    // Note: Full pub/sub requires Redis client, this is a simplified version
    const redisMessage: RedisMessage = {
      type: 'event',
      data: message,
      timestamp: Date.now(),
    };

    await this.set(`pubsub:${channel}:${Date.now()}`, redisMessage, 3600); // 1 hour
    this.logger.debug(`Published to ${channel}:`, message);
  }

  /**
   * Subscribe to channel (simplified implementation)
   */
  async subscribe(channel: string, callback: RedisSubscriber): Promise<void> {
    // Note: Full pub/sub requires Redis client, this is a placeholder
    this.logger.warn(
      `Pub/sub subscription not fully implemented with cache-manager: ${channel}`,
    );
  }

  // ========== HABITS-SPECIFIC OPERATIONS ==========

  /**
   * Get all habits from cache
   */
  async getHabits(): Promise<Habit[] | null> {
    return this.get<Habit[]>(REDIS_KEYS.HABITS.ALL.prefix);
  }

  /**
   * Set all habits in cache
   */
  async setHabits(habits: Habit[], ttl?: number): Promise<void> {
    const finalTtl = ttl || REDIS_KEYS.HABITS.ALL.ttl;
    await this.set(REDIS_KEYS.HABITS.ALL.prefix, habits, finalTtl);
  }

  /**
   * Get specific habit from cache
   */
  async getHabit(id: string): Promise<Habit | null> {
    const keyConfig = REDIS_KEYS.HABITS.BY_ID(id);
    return this.get<Habit>(keyConfig.key);
  }

  /**
   * Set specific habit in cache
   */
  async setHabit(habit: Habit, ttl?: number): Promise<void> {
    const keyConfig = REDIS_KEYS.HABITS.BY_ID(habit.id);
    const finalTtl = ttl || keyConfig.ttl;
    await this.set(keyConfig.key, habit, finalTtl);
  }

  /**
   * Get habits for specific user
   */
  async getHabitsByUser(userId: string): Promise<Habit[] | null> {
    const keyConfig = REDIS_KEYS.HABITS.BY_USER(userId);
    return this.get<Habit[]>(keyConfig.key);
  }

  /**
   * Set habits for specific user
   */
  async setHabitsByUser(
    userId: string,
    habits: Habit[],
    ttl?: number,
  ): Promise<void> {
    const keyConfig = REDIS_KEYS.HABITS.BY_USER(userId);
    const finalTtl = ttl || keyConfig.ttl;
    await this.set(keyConfig.key, habits, finalTtl);
  }

  /**
   * Invalidate habits cache based on configuration
   */
  async invalidateHabitsCache(config: CacheInvalidationConfig): Promise<void> {
    const keysToDelete: string[] = [];

    switch (config.type) {
      case 'single':
        if (config.entityId) {
          keysToDelete.push(REDIS_KEYS.HABITS.BY_ID(config.entityId).key);
        }
        break;

      case 'user_specific':
        if (config.userId) {
          keysToDelete.push(REDIS_KEYS.HABITS.BY_USER(config.userId).key);
        }
        keysToDelete.push(REDIS_KEYS.HABITS.ALL.prefix);
        break;

      case 'all':
        keysToDelete.push(REDIS_KEYS.HABITS.ALL.prefix);
        keysToDelete.push(REDIS_KEYS.HABITS.STATS.prefix);
        break;

      case 'pattern':
        if (config.patterns) {
          // With cache-manager, we'll clear all since pattern matching is limited
          await this.clear();
          return;
        }
        break;
    }

    await this.del(keysToDelete);
    this.logger.debug(`Invalidated habits cache: ${keysToDelete.join(', ')}`);
  }

  // ========== UTILITY METHODS ==========

  /**
   * Sleep utility for retry delays
   */
  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Generate cache key with namespace
   */
  generateKey(namespace: string, ...parts: string[]): string {
    return [namespace, ...parts].join(':');
  }

  /**
   * Get cache statistics
   */
  async getStats(): Promise<{ keys: number; memory: string }> {
    // Simplified stats - full implementation would use Redis INFO command
    return {
      keys: -1, // Unknown
      memory: 'unknown',
    };
  }
}
