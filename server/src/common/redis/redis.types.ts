
// Tipos base para Redis operations
export interface RedisKeyConfig {
  prefix: string;
  ttl?: number; // Time to live in seconds
}

export interface RedisLockOptions {
  ttl?: number; // Default: 30 seconds
  retryDelay?: number; // Default: 100ms
  maxRetries?: number; // Default: 3
}

export interface RedisSubscriptionCallback {
  (channel: string, message: any): void;
}

export interface PaginationOptions {
  page?: number;
  limit?: number;
  skip?: number;
  orderBy?: Record<string, 'asc' | 'desc'>;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Tipos específicos para la aplicación
export interface HabitCacheConfig {
  all: RedisKeyConfig;
  byId: RedisKeyConfig;
  byUser: RedisKeyConfig;
  stats: RedisKeyConfig;
}

// Configuración de claves de caché
export const REDIS_KEYS = {
  HABITS: {
    ALL: { prefix: 'habits:all', ttl: 300 }, // 5 minutes
    BY_ID: (id: string) => ({ key: `habits:${id}`, ttl: 300 }),
    BY_USER: (userId: string) => ({ key: `habits:user:${userId}`, ttl: 600 }), // 10 minutes
    STATS: { prefix: 'habits:stats', ttl: 900 }, // 15 minutes
  },
  LOCKS: {
    HABIT_UPDATE: (id: string) => `locks:habit:update:${id}`,
    HABIT_CREATE: 'locks:habit:create',
  },
  PUBSUB: {
    HABIT_EVENTS: 'habit:events',
    USER_EVENTS: 'user:events',
  },
} as const;

// Tipos para transacciones
export interface PrismaTransaction {
  // Type will be inferred from PrismaClient when needed
  [key: string]: any;
}

export type TransactionCallback<T> = (tx: PrismaTransaction) => Promise<T>;

// Enum para tipos de invalidación de caché
export enum CacheInvalidationType {
  SINGLE = 'single',
  ALL = 'all',
  PATTERN = 'pattern',
  USER_SPECIFIC = 'user_specific',
}

export interface CacheInvalidationConfig {
  type: CacheInvalidationType;
  patterns?: string[];
  userId?: string;
  entityId?: string;
}

// Tipos para Pub/Sub
export interface RedisMessage {
  type: string;
  data: any;
  timestamp: number;
  entityId?: string;
  userId?: string;
}

export type RedisSubscriber = RedisSubscriptionCallback;
