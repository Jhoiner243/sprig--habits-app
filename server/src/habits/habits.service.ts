import { Injectable, Logger } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit } from './entities/habit.entity';
import { HabitsRepository } from './repositories/habits.repository';

/**
 * HabitsService refactored to use Repository Pattern
 * Business logic layer that delegates data operations to HabitsRepository
 */
@Injectable()
export class HabitsService {
  private readonly logger = new Logger(HabitsService.name);

  constructor(private readonly habitsRepository: HabitsRepository) {}

  // ========== BASIC CRUD OPERATIONS ==========

  /**
   * Create a new habit with business logic validation
   */
  async create(createHabitDto: CreateHabitDto): Promise<Habit> {
    try {
      // Business logic: Trim title and validate
      const sanitizedData = {
        title: createHabitDto.title.trim(),
        description: createHabitDto.description?.trim() || null,
        completed: false, // New habits are always incomplete
      };

      this.logger.log(`Creating new habit: ${sanitizedData.title}`);
      return await this.habitsRepository.create(sanitizedData);
    } catch (error) {
      this.logger.error('Error creating habit:', error);
      throw error;
    }
  }

  /**
   * Get all habits with optional filtering
   */
  async findAll(): Promise<Habit[]> {
    try {
      this.logger.debug('Fetching all habits');
      return await this.habitsRepository.findMany();
    } catch (error) {
      this.logger.error('Error fetching all habits:', error);
      throw error;
    }
  }

  /**
   * Get habit by ID with error handling
   */
  async findOne(id: number): Promise<Habit | null> {
    try {
      this.logger.debug(`Fetching habit with ID: ${id}`);
      return await this.habitsRepository.findOne(id);
    } catch (error) {
      this.logger.error(`Error fetching habit ${id}:`, error);
      throw error;
    }
  }

  /**
   * Update habit with business logic validation
   */
  async update(id: number, updateHabitDto: UpdateHabitDto): Promise<Habit> {
    try {
      // Business logic: Validate update data
      const sanitizedData: any = {};

      if (updateHabitDto.title !== undefined) {
        sanitizedData.title = updateHabitDto.title.trim();
      }

      if (updateHabitDto.description !== undefined) {
        sanitizedData.description = updateHabitDto.description?.trim() || null;
      }

      if (updateHabitDto.completed !== undefined) {
        sanitizedData.completed = updateHabitDto.completed;
      }

      this.logger.log(`Updating habit ${id} with data:`, sanitizedData);
      return await this.habitsRepository.update(id, sanitizedData);
    } catch (error) {
      this.logger.error(`Error updating habit ${id}:`, error);
      throw error;
    }
  }

  /**
   * Remove habit with validation
   */
  async remove(id: number): Promise<void> {
    try {
      // Business logic: Check if habit exists
      const habit = await this.habitsRepository.findOne(id);
      if (!habit) {
        throw new Error(`Habit with ID ${id} not found`);
      }

      this.logger.log(`Removing habit with ID: ${id}`);
      await this.habitsRepository.remove(id);
    } catch (error) {
      this.logger.error(`Error removing habit ${id}:`, error);
      throw error;
    }
  }

  // ========== BUSINESS LOGIC OPERATIONS ==========

  /**
   * Get completed habits with business logic
   */
  async getCompletedHabits(): Promise<Habit[]> {
    try {
      this.logger.debug('Fetching completed habits');
      return await this.habitsRepository.findCompleted();
    } catch (error) {
      this.logger.error('Error fetching completed habits:', error);
      throw error;
    }
  }

  /**
   * Get pending habits with business logic
   */
  async getPendingHabits(): Promise<Habit[]> {
    try {
      this.logger.debug('Fetching pending habits');
      return await this.habitsRepository.findPending();
    } catch (error) {
      this.logger.error('Error fetching pending habits:', error);
      throw error;
    }
  }

  /**
   * Mark habit as completed with additional business logic
   */
  async markHabitCompleted(id: number): Promise<Habit> {
    try {
      this.logger.log(`Marking habit ${id} as completed`);
      const habit = await this.habitsRepository.markCompleted(id);

      // Additional business logic could go here:
      // - Send notifications
      // - Update user statistics
      // - Trigger analytics events

      return habit;
    } catch (error) {
      this.logger.error(`Error marking habit ${id} as completed:`, error);
      throw error;
    }
  }

  /**
   * Mark habit as incomplete with business logic
   */
  async markHabitIncomplete(id: number): Promise<Habit> {
    try {
      this.logger.log(`Marking habit ${id} as incomplete`);
      return await this.habitsRepository.markIncomplete(id);
    } catch (error) {
      this.logger.error(`Error marking habit ${id} as incomplete:`, error);
      throw error;
    }
  }

  /**
   * Get habit statistics with business logic
   */
  async getHabitStatistics(): Promise<{
    total: number;
    completed: number;
    pending: number;
    completionRate: number;
  }> {
    try {
      this.logger.debug('Fetching habit statistics');
      const stats = await this.habitsRepository.getStatistics();

      // Business logic: Add calculated metrics
      const enhancedStats = {
        ...stats,
        trend: this.calculateTrend(stats),
        insights: this.generateInsights(stats),
      };

      return enhancedStats;
    } catch (error) {
      this.logger.error('Error fetching habit statistics:', error);
      throw error;
    }
  }

  /**
   * Search habits with enhanced search logic
   */
  async searchHabits(query: string): Promise<Habit[]> {
    try {
      // Business logic: Validate and enhance search query
      const sanitizedQuery = query.trim();
      if (sanitizedQuery.length < 2) {
        throw new Error('Search query must be at least 2 characters');
      }

      this.logger.debug(`Searching habits with query: ${sanitizedQuery}`);
      return await this.habitsRepository.searchHabits(sanitizedQuery);
    } catch (error) {
      this.logger.error(`Error searching habits with query '${query}':`, error);
      throw error;
    }
  }

  /**
   * Get recent habits with business logic
   */
  async getRecentHabits(days: number = 7): Promise<Habit[]> {
    try {
      // Business logic: Validate days parameter
      if (days < 1 || days > 365) {
        throw new Error('Days parameter must be between 1 and 365');
      }

      this.logger.debug(`Fetching recent habits from last ${days} days`);
      return await this.habitsRepository.getRecentHabits(days);
    } catch (error) {
      this.logger.error(
        `Error fetching recent habits from last ${days} days:`,
        error,
      );
      throw error;
    }
  }

  /**
   * Bulk operations with enhanced business logic
   */
  async markMultipleHabitsCompleted(ids: number[]): Promise<{
    successful: Habit[];
    failed: { id: number; error: string }[];
  }> {
    try {
      // Business logic: Validate IDs
      if (!ids || ids.length === 0) {
        throw new Error('At least one habit ID must be provided');
      }

      this.logger.log(`Marking ${ids.length} habits as completed`);
      const updatedHabits =
        await this.habitsRepository.markMultipleCompleted(ids);

      // Additional business logic:
      // - Send batch notifications
      // - Update user streak
      // - Calculate achievements

      return {
        successful: updatedHabits,
        failed: [], // In a real implementation, track individual failures
      };
    } catch (error) {
      this.logger.error('Error marking multiple habits as completed:', error);
      throw error;
    }
  }

  /**
   * Advanced filtering with business logic
   */
  async getHabitsWithFilters(filters: {
    completed?: boolean;
    dateFrom?: Date;
    dateTo?: Date;
    title?: string;
  }): Promise<Habit[]> {
    try {
      // Business logic: Validate and enhance filters
      const enhancedFilters = { ...filters };

      if (filters.title) {
        enhancedFilters.title = filters.title.trim();
      }

      this.logger.debug('Fetching habits with filters:', enhancedFilters);
      return await this.habitsRepository.findWithFilters(enhancedFilters);
    } catch (error) {
      this.logger.error('Error fetching habits with filters:', error);
      throw error;
    }
  }

  // ========== UTILITY METHODS ==========

  /**
   * Calculate trend based on statistics
   */
  private calculateTrend(stats: {
    completed: number;
    pending: number;
  }): 'improving' | 'declining' | 'stable' {
    const total = stats.completed + stats.pending;
    const completionRate = total > 0 ? (stats.completed / total) * 100 : 0;

    // Simple trend calculation (in real implementation, use historical data)
    if (completionRate > 70) return 'improving';
    if (completionRate < 30) return 'declining';
    return 'stable';
  }

  /**
   * Generate insights from statistics
   */
  private generateInsights(stats: {
    completed: number;
    pending: number;
  }): string[] {
    const insights: string[] = [];
    const total = stats.completed + stats.pending;

    if (total === 0) {
      insights.push('Start by creating your first habit!');
    } else if (stats.completed === 0) {
      insights.push(
        'Focus on completing at least one habit to build momentum.',
      );
    } else if (stats.pending > stats.completed) {
      insights.push(
        'You have more pending than completed habits. Try breaking them into smaller tasks.',
      );
    } else {
      insights.push(
        `Great job! You've completed ${stats.completed} out of ${total} habits.`,
      );
    }

    return insights;
  }

  /**
   * Legacy method for backward compatibility
   * @deprecated Use findAll() instead
   */
  async findAllLegacy(): Promise<Habit[]> {
    this.logger.warn('findAllLegacy is deprecated, use findAll() instead');
    return this.findAll();
  }
}
