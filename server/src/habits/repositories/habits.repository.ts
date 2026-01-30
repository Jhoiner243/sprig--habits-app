import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RedisService } from '../../common/redis/redis.service';
import { BaseRepository } from '../../common/base/base.repository';
import { IHabitsRepository } from '../../common/base/repository.interface';
import { Habit } from '../entities/habit.entity';
import { CacheInvalidationType } from '../../common/redis/redis.types';

/**
 * Specific repository for Habit entity
 * Extends BaseRepository with habit-specific operations
 */
@Injectable()
export class HabitsRepository
  extends BaseRepository<Habit>
  implements IHabitsRepository
{
  constructor(prisma: PrismaService, redis: RedisService) {
    super(prisma, redis, 'Habit');
  }

  // ========== IMPLEMENTATION OF ABSTRACT METHODS ==========

  protected getModel() {
    // Note: This will work once PrismaService has proper typing
    return (this.prisma as any).habit;
  }

  protected getCacheKeyPrefix(): string {
    return 'habits';
  }

  // ========== HABIT-SPECIFIC OPERATIONS ==========

  async findCompleted(): Promise<Habit[]> {
    try {
      const cacheKey = this.generateCacheKey('completed');
      let habits = await this.redis.get<Habit[]>(cacheKey);

      if (!habits) {
        habits = await this.getModel().findMany({
          where: { completed: true },
          orderBy: { updatedAt: 'desc' },
        });
        await this.redis.set(cacheKey, habits, 300);
      }

      return habits || [];
    } catch (error) {
      this.handleError(error, 'findCompleted');
    }
  }

  async findPending(): Promise<Habit[]> {
    try {
      const cacheKey = this.generateCacheKey('pending');
      let habits = await this.redis.get<Habit[]>(cacheKey);

      if (!habits) {
        habits = await this.getModel().findMany({
          where: { completed: false },
          orderBy: { createdAt: 'asc' },
        });
        await this.redis.set(cacheKey, habits, 300);
      }

      return habits || [];
    } catch (error) {
      this.handleError(error, 'findPending');
    }
  }

  async findByTitle(title: string): Promise<Habit | null> {
    try {
      const cacheKey = this.generateCacheKey('title', title);
      let habit = await this.redis.get<Habit>(cacheKey);

      if (!habit) {
        habit = await this.getModel().findFirst({
          where: { title: { contains: title, mode: 'insensitive' } },
        });

        if (habit) {
          await this.redis.set(cacheKey, habit, 300);
        }
      }

      return habit || null;
    } catch (error) {
      this.handleError(error, 'findByTitle', { title });
    }
  }

  async markCompleted(id: number): Promise<Habit> {
    try {
      const lockKey = `habit:complete:${id}`;
      const lock = await this.redis.acquireLock(lockKey, { ttl: 30 });

      if (!lock) {
        throw new Error(`Could not acquire lock to complete habit ${id}`);
      }

      try {
        const habit = await this.getModel().update({
          where: { id },
          data: { completed: true },
        });

        await this.redis.releaseLock(lockKey, lock);

        // Invalidate relevant cache keys
        await this.redis.invalidateHabitsCache({
          type: CacheInvalidationType.SINGLE,
          entityId: id,
        });
        await this.redis.del('habits:completed');
        await this.redis.del('habits:pending');

        // Publish event
        await this.redis.publish('habit:completed', { id, title: habit.title });

        return habit;
      } catch (updateError) {
        await this.redis.releaseLock(lockKey, lock);
        throw updateError;
      }
    } catch (error) {
      this.handleError(error, 'markCompleted', { id });
    }
  }

  async markIncomplete(id: number): Promise<Habit> {
    try {
      const habit = await this.getModel().update({
        where: { id },
        data: { completed: false },
      });

      await this.redis.invalidateHabitsCache({
        type: CacheInvalidationType.SINGLE,
        entityId: id,
      });
      await this.redis.del('habits:completed');
      await this.redis.del('habits:pending');

      // Publish event
      await this.redis.publish('habit:incomplete', { id, title: habit.title });

      return habit;
    } catch (error) {
      this.handleError(error, 'markIncomplete', { id });
    }
  }

  async getStatistics(): Promise<{
    total: number;
    completed: number;
    pending: number;
    completionRate: number;
  }> {
    try {
      const cacheKey = this.generateCacheKey('stats');
      let stats = await this.redis.get<{
        total: number;
        completed: number;
        pending: number;
        completionRate: number;
      }>(cacheKey);

      if (!stats) {
        const model = this.getModel();

        const [total, completed] = await Promise.all([
          model.count(),
          model.count({ where: { completed: true } }),
        ]);

        const pending = total - completed;
        const completionRate =
          total > 0 ? Math.round((completed / total) * 100) : 0;

        stats = { total, completed, pending, completionRate };
        await this.redis.set(cacheKey, stats, 600); // 10 minutes
      }

      return stats || { total: 0, completed: 0, pending: 0, completionRate: 0 };
    } catch (error) {
      this.handleError(error, 'getStatistics');
    }
  }

  async findWithFilters(filters: {
    completed?: boolean;
    dateFrom?: Date;
    dateTo?: Date;
    title?: string;
  }): Promise<Habit[]> {
    try {
      const cacheKey = this.generateCacheKey(
        'filters',
        JSON.stringify(filters),
      );
      let habits = await this.redis.get<Habit[]>(cacheKey);

      if (!habits) {
        const whereConditions: any = {};

        if (filters.completed !== undefined) {
          whereConditions.completed = filters.completed;
        }

        if (filters.dateFrom || filters.dateTo) {
          whereConditions.createdAt = {};
          if (filters.dateFrom) {
            whereConditions.createdAt.gte = filters.dateFrom;
          }
          if (filters.dateTo) {
            whereConditions.createdAt.lte = filters.dateTo;
          }
        }

        if (filters.title) {
          whereConditions.title = {
            contains: filters.title,
            mode: 'insensitive',
          };
        }

        habits = await this.getModel().findMany({
          where: whereConditions,
          orderBy: { updatedAt: 'desc' },
        });
        await this.redis.set(cacheKey, habits, 300);
      }

      return habits || [];
    } catch (error) {
      this.handleError(error, 'findWithFilters', { filters });
    }
  }

  async getHabitsByDateRange(startDate: Date, endDate: Date): Promise<Habit[]> {
    try {
      const cacheKey = this.generateCacheKey(
        'range',
        startDate.toISOString(),
        endDate.toISOString(),
      );
      let habits = await this.redis.get<Habit[]>(cacheKey);

      if (!habits) {
        habits = await this.getModel().findMany({
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate,
            },
          },
          orderBy: { createdAt: 'asc' },
        });
        await this.redis.set(cacheKey, habits, 600); // 10 minutes
      }

      return habits || [];
    } catch (error) {
      this.handleError(error, 'getHabitsByDateRange', { startDate, endDate });
    }
  }

  async markMultipleCompleted(ids: number[]): Promise<Habit[]> {
    try {
      const lockKey = 'habits:batch:complete';
      const lock = await this.redis.acquireLock(lockKey, { ttl: 60 });

      if (!lock) {
        throw new Error('Could not acquire lock for batch completion');
      }

      try {
        await this.getModel().updateMany({
          where: { id: { in: ids } },
          data: { completed: true },
        });

        // Invalidate relevant cache keys
        await this.redis.invalidateHabitsCache({
          type: CacheInvalidationType.ALL,
        });
        await this.redis.del('habits:completed');
        await this.redis.del('habits:pending');
        await this.redis.del('habits:stats');

        await this.redis.releaseLock(lockKey, lock);

        // Publish batch event
        await this.redis.publish('habit:batch:completed', {
          count: ids.length,
        });

        // Return updated habits
        return await this.getModel().findMany({
          where: { id: { in: ids } },
        });
      } catch (updateError) {
        await this.redis.releaseLock(lockKey, lock);
        throw updateError;
      }
    } catch (error) {
      this.handleError(error, 'markMultipleCompleted', { ids });
    }
  }

  async bulkUpdateStatus(completed: boolean, ids: number[]): Promise<void> {
    try {
      await this.getModel().updateMany({
        where: { id: { in: ids } },
        data: { completed },
      });

      // Invalidate all relevant cache keys
      await this.redis.invalidateHabitsCache({
        type: CacheInvalidationType.ALL,
      });
      await this.redis.del('habits:completed');
      await this.redis.del('habits:pending');
      await this.redis.del('habits:stats');

      // Publish bulk update event
      await this.redis.publish('habit:bulk:update', {
        completed,
        count: ids.length,
      });
    } catch (error) {
      this.handleError(error, 'bulkUpdateStatus', { completed, ids });
    }
  }

  async getRecentHabits(days: number): Promise<Habit[]> {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);
      startDate.setHours(0, 0, 0, 0);

      const cacheKey = this.generateCacheKey('recent', days.toString());
      let habits = await this.redis.get<Habit[]>(cacheKey);

      if (!habits) {
        habits = await this.getModel().findMany({
          where: {
            createdAt: { gte: startDate },
          },
          orderBy: { createdAt: 'desc' },
          take: 50, // Limit to last 50
        });
        await this.redis.set(cacheKey, habits, 300);
      }

      return habits || [];
    } catch (error) {
      this.handleError(error, 'getRecentHabits', { days });
    }
  }

  async searchHabits(query: string): Promise<Habit[]> {
    try {
      const cacheKey = this.generateCacheKey('search', query);
      let habits = await this.redis.get<Habit[]>(cacheKey);

      if (!habits) {
        habits = await this.getModel().findMany({
          where: {
            OR: [
              { title: { contains: query, mode: 'insensitive' } },
              { description: { contains: query, mode: 'insensitive' } },
            ],
          },
          orderBy: { updatedAt: 'desc' },
        });
        await this.redis.set(cacheKey, habits, 180); // 3 minutes
      }

      return habits || [];
    } catch (error) {
      this.handleError(error, 'searchHabits', { query });
    }
  }

  // ========== HELPER METHODS ==========

  private logError(error: any, operation: string, context?: any): void {
    console.error(`${operation} error for HabitsRepository:`, {
      error,
      context,
    });
  }
}
