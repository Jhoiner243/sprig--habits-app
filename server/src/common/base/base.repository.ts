import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import {
  CacheInvalidationConfig,
  CacheInvalidationType,
  PaginatedResult,
  PaginationOptions,
  PrismaTransaction,
  TransactionCallback,
} from '../redis/redis.types';
import {
  IRepository
} from './repository.interface';

/**
 * Abstract base repository implementing IRepository interface
 * Provides common CRUD operations, caching, and transaction support
 */
@Injectable()
export abstract class BaseRepository<T> implements IRepository<T> {
  protected readonly logger = new Logger(BaseRepository.name);

  constructor(
    protected readonly prisma: PrismaService,
    protected readonly redis: RedisService,
    protected readonly entityName: string,
  ) {}

  // ========== ABSTRACT METHODS ==========

  /**
   * Get Prisma model for this repository
   * Must be implemented by concrete repositories
   */
  protected abstract getModel(): any;

  /**
   * Get cache key prefix for this entity
   */
  protected abstract getCacheKeyPrefix(): string;

  /**
   * Transform entity data before saving (optional)
   */
  protected transformBeforeSave(data: Partial<T>): Partial<T> {
    return data;
  }

  /**
   * Transform entity data after retrieving (optional)
   */
  protected transformAfterFind(entity: any): T {
    return entity as T;
  }

  // ========== BASIC CRUD OPERATIONS ==========

  async create(data: Partial<T>): Promise<T> {
    try {
      const transformedData = this.transformBeforeSave(data);
      const model = this.getModel();

      const result = await model.create({
        data: transformedData,
      });

      await this.invalidateCache({
        type: CacheInvalidationType.ALL,
      });

      this.logger.log(`Created ${this.entityName} with ID: ${result.id}`);
      return this.transformAfterFind(result);
    } catch (error) {
      this.logger.error(`Error creating ${this.entityName}:`, error);
      throw error;
    }
  }

  async findOne(id: string): Promise<T | null> {
    try {
      // Try cache first
      const cacheKey = `${this.getCacheKeyPrefix()}:${id}`;
      let entity = await this.redis.get<T>(cacheKey);

      if (entity) {
        return entity;
      }

      // Query database
      const model = this.getModel();
      entity = await model.findUnique({
        where: { id },
      });

      if (entity) {
        await this.redis.set(cacheKey, entity, 300); //5 minutes
        return this.transformAfterFind(entity);
      }

      return null;
    } catch (error) {
      this.logger.error(
        `Error finding ${this.entityName} with ID ${id}:`,
        error,
      );
      throw error;
    }
  }

  async findMany(conditions: any = {}): Promise<T[]> {
    try {
      const cacheKey = `${this.getCacheKeyPrefix()}:list:${JSON.stringify(conditions)}`;
      const entities = await this.redis.get<T[]>(cacheKey);

      if (entities) {
        return entities;
      }

      const model = this.getModel();
      const result = await model.findMany({
        where: conditions,
      });

      const transformed = result.map((entity) =>
        this.transformAfterFind(entity),
      );
      await this.redis.set(cacheKey, transformed, 300);

      return transformed;
    } catch (error) {
      this.logger.error(`Error finding many ${this.entityName}:`, error);
      throw error;
    }
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    try {
      const transformedData = this.transformBeforeSave(data);
      const model = this.getModel();

      const result = await model.update({
        where: { id },
        data: transformedData,
      });

      await this.invalidateCache({
        type: CacheInvalidationType.SINGLE,
        entityId: id,
      });

      this.logger.log(`Updated ${this.entityName} with ID: ${id}`);
      return this.transformAfterFind(result);
    } catch (error) {
      this.logger.error(
        `Error updating ${this.entityName} with ID ${id}:`,
        error,
      );
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const model = this.getModel();
      await model.delete({
        where: { id },
      });

      await this.invalidateCache({
        type: CacheInvalidationType.SINGLE,
        entityId: id,
      });

      this.logger.log(`Deleted ${this.entityName} with ID: ${id}`);
    } catch (error) {
      this.logger.error(
        `Error deleting ${this.entityName} with ID ${id}:`,
        error,
      );
      throw error;
    }
  }

  // ========== ADVANCED QUERY OPERATIONS ==========

  async findWithPagination(
    options: PaginationOptions,
  ): Promise<PaginatedResult<T>> {
    try {
      const {
        page = 1,
        limit = 10,
        skip = 0,
        orderBy = { id: 'asc' },
      } = options;
      const actualSkip = skip || (page - 1) * limit;

      const cacheKey = `${this.getCacheKeyPrefix()}:page:${page}:${limit}:${JSON.stringify(orderBy)}`;
      const cached = await this.redis.get<PaginatedResult<T>>(cacheKey);

      if (cached) {
        return cached;
      }

      const model = this.getModel();

      const [data, total] = await Promise.all([
        model.findMany({
          skip: actualSkip,
          take: limit,
          orderBy,
        }),
        model.count(),
      ]);

      const totalPages = Math.ceil(total / limit);
      const result: PaginatedResult<T> = {
        data: data.map((entity) => this.transformAfterFind(entity)),
        total,
        page,
        limit,
        totalPages,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      };

      await this.redis.set(cacheKey, result, 60); // 1 minute
      return result;
    } catch (error) {
      this.logger.error(`Error finding paginated ${this.entityName}:`, error);
      throw error;
    }
  }

  async findWithRelations(relations: string[]): Promise<T[]> {
    try {
      const model = this.getModel();
      const relationsObject = relations.reduce((acc, relation) => {
        acc[relation] = true;
        return acc;
      }, {} as any);

      const result = await model.findMany({
        include: relationsObject,
      });

      return result.map((entity) => this.transformAfterFind(entity));
    } catch (error) {
      this.logger.error(
        `Error finding ${this.entityName} with relations:`,
        error,
      );
      throw error;
    }
  }

  async findFirst(conditions: any): Promise<T | null> {
    try {
      const model = this.getModel();
      const result = await model.findFirst({
        where: conditions,
      });

      return result ? this.transformAfterFind(result) : null;
    } catch (error) {
      this.logger.error(`Error finding first ${this.entityName}:`, error);
      throw error;
    }
  }

  async count(conditions: any = {}): Promise<number> {
    try {
      const model = this.getModel();
      return await model.count({
        where: conditions,
      });
    } catch (error) {
      this.logger.error(`Error counting ${this.entityName}:`, error);
      throw error;
    }
  }

  // ========== TRANSACTION OPERATIONS ==========

  async transaction<R>(callback: TransactionCallback<R>): Promise<R> {
    try {
      // Simple transaction implementation - will work once Prisma is properly connected
      return await callback({} as PrismaTransaction);
    } catch (error) {
      this.logger.error(`Transaction error for ${this.entityName}:`, error);
      throw error;
    }
  }

  async batchCreate(items: Partial<T>[]): Promise<T[]> {
    const results: T[] = [];

    for (const item of items) {
      const result = await this.create(item);
      results.push(result);
    }

    return results;
  }

  async batchUpdate(updates: { id: string; data: Partial<T> }[]): Promise<T[]> {
    const results: T[] = [];

    for (const { id, data } of updates) {
      const result = await this.update(id, data);
      results.push(result);
    }

    return results;
  }

  async batchRemove(ids: string[]): Promise<void> {
    for (const id of ids) {
      await this.remove(id);
    }
  }

  // ========== CACHE OPERATIONS ==========

  async invalidateCache(config?: CacheInvalidationConfig): Promise<void> {
    const patterns: string[] = [`${this.getCacheKeyPrefix()}:*`];

    if (config?.entityId) {
      patterns.push(`${this.getCacheKeyPrefix()}:${config.entityId}`);
    }

    await this.redis.invalidatePattern(patterns.join(','));
  }

  async clearCache(): Promise<void> {
    await this.invalidateCache({ type: CacheInvalidationType.ALL });
  }

  // ========== UTILITY METHODS ==========

  async getWithCache(id: string): Promise<T | null> {
    return this.findOne(id);
  }

  async saveWithCache(entity: T): Promise<T> {
    const id = (entity as any).id;
    return this.update(id, entity);
  }

  async removeWithCache(id: string): Promise<void> {
    await this.remove(id);
  }

  /**
   * Generate cache key for this entity
   */
  protected generateCacheKey(...parts: string[]): string {
    return [this.getCacheKeyPrefix(), ...parts].join(':');
  }

  /**
   * Handle errors consistently
   */
  protected handleError(error: any, operation: string, context?: any): never {
    this.logger.error(`${operation} error for ${this.entityName}:`, {
      error,
      context,
    });
    throw error;
  }
}
