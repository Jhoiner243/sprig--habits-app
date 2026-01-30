import { SetMetadata } from '@nestjs/common';
import { RedisService } from '../../common/redis/redis.service';

/**
 * Cache configuration options
 */
export interface CacheOptions {
  ttl?: number;
  key?: string;
  prefix?: string;
  condition?: (...args: any[]) => boolean;
}

/**
 * Cache result decorator
 * Automatically caches method results with Redis
 */
export function CacheResult(options: CacheOptions = {}) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      // Check if custom condition is provided and evaluate it
      if (options.condition && !options.condition(...args)) {
        return await originalMethod.apply(this, args);
      }

      // Generate cache key
      const className = target.constructor.name;
      const key =
        options.key ||
        `${options.prefix || className}:${propertyKey}:${JSON.stringify(args)}`;

      // Try to get from cache first
      const redis: RedisService = this.redis || this.redisService;
      if (!redis) {
        console.warn('RedisService not found in decorator context');
        return await originalMethod.apply(this, args);
      }

      const cached = await redis.get(key);
      if (cached !== null) {
        return cached;
      }

      // Execute original method and cache result
      const result = await originalMethod.apply(this, args);
      await redis.set(key, result, options.ttl || 300);

      return result;
    };

    Reflect.defineMetadata('cache:options', options, target);
    return descriptor;
  };
}

/**
 * Cache invalidation decorator
 * Automatically invalidates cache after method execution
 */
export function CacheInvalidate(patterns: string[] = []) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      // Execute original method
      const result = await originalMethod.apply(this, args);

      // Invalidate cache patterns
      const redis: RedisService = this.redis || this.redisService;
      if (redis && patterns.length > 0) {
        for (const pattern of patterns) {
          await redis.invalidatePattern(pattern);
        }
      }

      return result;
    };

    Reflect.defineMetadata('cache:invalidate', patterns, target);
    return descriptor;
  };
}

/**
 * Cache by ID decorator
 * For methods that work with entity IDs
 */
export function CacheById(options: CacheOptions = {}) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      // Extract ID from arguments (assumes first argument is ID)
      const id = args[0];
      if (!id) {
        return await originalMethod.apply(this, args);
      }

      // Generate cache key
      const className = target.constructor.name;
      const key =
        options.key || `${options.prefix || className}:${propertyKey}:${id}`;

      // Try to get from cache first
      const redis: RedisService = this.redis || this.redisService;
      if (!redis) {
        console.warn('RedisService not found in decorator context');
        return await originalMethod.apply(this, args);
      }

      const cached = await redis.get(key);
      if (cached !== null) {
        return cached;
      }

      // Execute original method and cache result
      const result = await originalMethod.apply(this, args);
      if (result) {
        await redis.set(key, result, options.ttl || 300);
      }

      return result;
    };

    const metadataKey = `cache:byid:${propertyKey}`;
    Reflect.defineMetadata(metadataKey, options, target);
    return descriptor;
  };
}

/**
 * Performance monitoring decorator
 * Tracks method execution time
 */
export function MonitorPerformance() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const startTime = Date.now();
      const className = target.constructor.name;

      try {
        const result = await originalMethod.apply(this, args);
        const endTime = Date.now();
        const duration = endTime - startTime;

        console.log(`[PERF] ${className}.${propertyKey}: ${duration}ms`);
        return result;
      } catch (error) {
        const endTime = Date.now();
        const duration = endTime - startTime;

        console.error(
          `[PERF ERROR] ${className}.${propertyKey}: ${duration}ms`,
          error,
        );
        throw error;
      }
    };

    return descriptor;
  };
}

/**
 * Retry decorator for failed operations
 */
export function Retry(maxAttempts: number = 3, delay: number = 1000) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const className = target.constructor.name;
      let lastError: any;

      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          return await originalMethod.apply(this, args);
        } catch (error) {
          lastError = error;
          console.warn(
            `[RETRY] ${className}.${propertyKey} attempt ${attempt}/${maxAttempts} failed:`,
            error,
          );

          if (attempt < maxAttempts) {
            await new Promise((resolve) =>
              setTimeout(resolve, delay * attempt),
            ); // Exponential backoff
          }
        }
      }

      console.error(
        `[RETRY] ${className}.${propertyKey} failed after ${maxAttempts} attempts`,
      );
      throw lastError;
    };

    return descriptor;
  };
}

/**
 * Distributed lock decorator
 * Ensures method execution is serialized
 */
export function DistributedLock(lockKey: string, ttl: number = 30) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const className = target.constructor.name;
      // Generate dynamic lock key
      const dynamicLockKey =
        typeof lockKey === 'function'
          ? (lockKey as Function)(...args)
          : lockKey;

      const redis: RedisService = this.redis || this.redisService;
      if (!redis) {
        console.warn('RedisService not found for DistributedLock decorator');
        return await originalMethod.apply(this, args);
      }

      // Acquire lock
      const acquiredLock = await redis.acquireLock(dynamicLockKey, { ttl });

      if (!acquiredLock) {
        throw new Error(
          `Could not acquire lock for ${className}.${propertyKey}`,
        );
      }

      try {
        const result = await originalMethod.apply(this, args);
        await redis.releaseLock(dynamicLockKey, acquiredLock);
        return result;
      } catch (error) {
        await redis.releaseLock(dynamicLockKey, acquiredLock);
        throw error;
      }
    };

    return descriptor;
  };
}
