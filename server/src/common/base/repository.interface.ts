import {
  PaginationOptions,
  PaginatedResult,
  CacheInvalidationConfig,
  TransactionCallback,
  PrismaTransaction,
} from '../redis/redis.types';

/**
 * Generic repository interface defining standard CRUD operations
 * and advanced database operations with caching support
 */
export interface IRepository<T> {
  // ========== BASIC CRUD OPERATIONS ==========

  /**
   * Create a new entity
   */
  create(data: Partial<T>): Promise<T>;

  /**
   * Find entity by ID
   */
  findOne(id: number): Promise<T | null>;

  /**
   * Find multiple entities with optional conditions
   */
  findMany(conditions?: any): Promise<T[]>;

  /**
   * Update entity by ID
   */
  update(id: number, data: Partial<T>): Promise<T>;

  /**
   * Remove entity by ID
   */
  remove(id: number): Promise<void>;

  // ========== ADVANCED QUERY OPERATIONS ==========

  /**
   * Find entities with pagination
   */
  findWithPagination(options: PaginationOptions): Promise<PaginatedResult<T>>;

  /**
   * Find entities with related data
   */
  findWithRelations(relations: string[]): Promise<T[]>;

  /**
   * Find first entity matching conditions
   */
  findFirst(conditions: any): Promise<T | null>;

  /**
   * Count entities matching conditions
   */
  count(conditions?: any): Promise<number>;

  // ========== TRANSACTION OPERATIONS ==========

  /**
   * Execute operations within a transaction
   */
  transaction<R>(callback: TransactionCallback<R>): Promise<R>;

  /**
   * Create multiple entities in batch
   */
  batchCreate(items: Partial<T>[]): Promise<T[]>;

  /**
   * Update multiple entities in batch
   */
  batchUpdate(updates: { id: number; data: Partial<T> }[]): Promise<T[]>;

  /**
   * Delete multiple entities in batch
   */
  batchRemove(ids: number[]): Promise<void>;

  // ========== CACHE OPERATIONS ==========

  /**
   * Invalidate cache for this entity type
   */
  invalidateCache(config?: CacheInvalidationConfig): Promise<void>;

  /**
   * Clear all cache for this entity type
   */
  clearCache(): Promise<void>;

  // ========== UTILITY METHODS ==========

  /**
   * Get entity from cache or database
   */
  getWithCache(id: number): Promise<T | null>;

  /**
   * Save entity to both database and cache
   */
  saveWithCache(entity: T): Promise<T>;

  /**
   * Delete entity from both database and cache
   */
  removeWithCache(id: number): Promise<void>;
}

/**
 * Interface for entity-specific repositories
 * Extends base repository with model-specific operations
 */
export interface IHabitsRepository extends IRepository<any> {
  // ========== HABIT-SPECIFIC OPERATIONS ==========

  /**
   * Find all completed habits
   */
  findCompleted(): Promise<any[]>;

  /**
   * Find all pending habits
   */
  findPending(): Promise<any[]>;

  /**
   * Find habit by title
   */
  findByTitle(title: string): Promise<any | null>;

  /**
   * Mark habit as completed
   */
  markCompleted(id: number): Promise<any>;

  /**
   * Mark habit as incomplete
   */
  markIncomplete(id: number): Promise<any>;

  /**
   * Get habit statistics
   */
  getStatistics(): Promise<{
    total: number;
    completed: number;
    pending: number;
    completionRate: number;
  }>;

  /**
   * Find habits with custom filters
   */
  findWithFilters(filters: {
    completed?: boolean;
    dateFrom?: Date;
    dateTo?: Date;
    title?: string;
  }): Promise<any[]>;

  /**
   * Get habits within date range
   */
  getHabitsByDateRange(startDate: Date, endDate: Date): Promise<any[]>;

  /**
   * Mark multiple habits as completed
   */
  markMultipleCompleted(ids: number[]): Promise<any[]>;

  /**
   * Bulk update status for multiple habits
   */
  bulkUpdateStatus(completed: boolean, ids: number[]): Promise<void>;

  /**
   * Get habits created in last N days
   */
  getRecentHabits(days: number): Promise<any[]>;

  /**
   * Search habits by title or description
   */
  searchHabits(query: string): Promise<any[]>;
}

/**
 * Repository factory interface for dynamic repository creation
 */
export interface IRepositoryFactory {
  /**
   * Create repository for specific entity type
   */
  createRepository<T>(entityType: string): IRepository<T>;

  /**
   * Get existing repository
   */
  getRepository<T>(entityType: string): IRepository<T> | null;

  /**
   * Register new repository type
   */
  registerRepository<T>(entityType: string, repository: IRepository<T>): void;
}
