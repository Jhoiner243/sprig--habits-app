import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from '../../common/redis/redis.service';
import { PrismaService } from '../../prisma/prisma.service';
import { HabitsRepository } from '../repositories/habits.repository';

/**
 * Interfaces para el servicio de rachas
 */
export interface StreakInfo {
  habitId: number;
  currentStreak: number;
  startDate: Date;
  endDate: Date;
}

export interface StreakStatistics {
  habitId: number;
  currentStreak: number;
  longestStreak: number;
  totalCompletions: number;
  completionRate: number;
  isActive: boolean;
  lastCompletedDate: Date | null;
}

export interface HabitStreakSummary {
  habitId: number;
  habitTitle: string;
  currentStreak: number;
  longestStreak: number;
  isActive: boolean;
}

/**
 * Servicio para gestionar las rachas (streaks) de hábitos
 * Calcula y rastrea rachas basándose en el historial de completitudes
 */
@Injectable()
export class RachasService {
  private readonly logger = new Logger(RachasService.name);

  constructor(
    private readonly habitsRepository: HabitsRepository,
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  // ========== MÉTODOS PRINCIPALES ==========

  /**
   * Obtiene la racha actual de un hábito
   * Una racha es activa si el hábito fue completado hoy o ayer
   */
  async getCurrentStreak(habitId: number): Promise<StreakInfo> {
    try {
      this.logger.debug(`Getting current streak for habit ${habitId}`);

      // Intentar obtener del cache
      const cacheKey = `streak:current:${habitId}`;
      const cached = await this.redis.get<StreakInfo>(cacheKey);
      if (cached) {
        return cached;
      }

      // Obtener todas las completitudes ordenadas por fecha descendente
      const completions = await this.getHabitCompletions(habitId);

      if (completions.length === 0) {
        const emptyStreak: StreakInfo = {
          habitId,
          currentStreak: 0,
          startDate: new Date(),
          endDate: new Date(),
        };
        return emptyStreak;
      }

      // Calcular racha actual
      const streakInfo = this.calculateCurrentStreak(habitId, completions);

      // Cachear por 5 minutos
      await this.redis.set(cacheKey, streakInfo, 300);

      return streakInfo;
    } catch (error) {
      this.logger.error(`Error getting current streak for habit ${habitId}:`, error);
      throw error;
    }
  }

  /**
   * Obtiene la racha más larga en el historial de un hábito
   */
  async getLongestStreak(habitId: number): Promise<StreakInfo> {
    try {
      this.logger.debug(`Getting longest streak for habit ${habitId}`);

      const cacheKey = `streak:longest:${habitId}`;
      const cached = await this.redis.get<StreakInfo>(cacheKey);
      if (cached) {
        return cached;
      }

      const completions = await this.getHabitCompletions(habitId);

      if (completions.length === 0) {
        const emptyStreak: StreakInfo = {
          habitId,
          currentStreak: 0,
          startDate: new Date(),
          endDate: new Date(),
        };
        return emptyStreak;
      }

      const longestStreak = this.calculateLongestStreak(habitId, completions);

      // Cachear por 10 minutos
      await this.redis.set(cacheKey, longestStreak, 600);

      return longestStreak;
    } catch (error) {
      this.logger.error(`Error getting longest streak for habit ${habitId}:`, error);
      throw error;
    }
  }

  /**
   * Obtiene estadísticas detalladas de rachas para un hábito
   */
  async getStreakStatistics(habitId: number): Promise<StreakStatistics> {
    try {
      this.logger.debug(`Getting streak statistics for habit ${habitId}`);

      const cacheKey = `streak:stats:${habitId}`;
      const cached = await this.redis.get<StreakStatistics>(cacheKey);
      if (cached) {
        return cached;
      }

      const [currentStreak, longestStreak, completions] = await Promise.all([
        this.getCurrentStreak(habitId),
        this.getLongestStreak(habitId),
        this.getHabitCompletions(habitId),
      ]);

      // Obtener información del hábito para calcular tasa de completitud
      const habit = await this.habitsRepository.findOne(habitId);
      if (!habit) {
        throw new Error(`Habit with ID ${habitId} not found`);
      }

      const totalCompletions = completions.length;
      const daysSinceCreation = this.getDaysDifference(
        habit.createdAt,
        new Date(),
      );
      const completionRate =
        daysSinceCreation > 0
          ? Math.round((totalCompletions / daysSinceCreation) * 100)
          : 0;

      const isActive = await this.isStreakActive(habitId);
      const lastCompletedDate =
        completions.length > 0 ? completions[0].completedAt : null;

      const statistics: StreakStatistics = {
        habitId,
        currentStreak: currentStreak.currentStreak,
        longestStreak: longestStreak.currentStreak,
        totalCompletions,
        completionRate,
        isActive,
        lastCompletedDate,
      };

      // Cachear por 5 minutos
      await this.redis.set(cacheKey, statistics, 300);

      return statistics;
    } catch (error) {
      this.logger.error(
        `Error getting streak statistics for habit ${habitId}:`,
        error,
      );
      throw error;
    }
  }

  /**
   * Verifica si la racha está activa (completado hoy o ayer)
   */
  async isStreakActive(habitId: number): Promise<boolean> {
    try {
      const completions = await this.getHabitCompletions(habitId, 2); // Solo necesitamos las últimas 2

      if (completions.length === 0) {
        return false;
      }

      const lastCompletion = completions[0];
      const today = this.getStartOfDay(new Date());
      const yesterday = this.getStartOfDay(
        new Date(today.getTime() - 24 * 60 * 60 * 1000),
      );
      const lastCompletionDay = this.getStartOfDay(lastCompletion.completedAt);

      return (
        lastCompletionDay.getTime() === today.getTime() ||
        lastCompletionDay.getTime() === yesterday.getTime()
      );
    } catch (error) {
      this.logger.error(
        `Error checking if streak is active for habit ${habitId}:`,
        error,
      );
      throw error;
    }
  }

  /**
   * Obtiene resumen de rachas para todos los hábitos
   */
  async getAllHabitsStreaks(): Promise<HabitStreakSummary[]> {
    try {
      this.logger.debug('Getting streaks for all habits');

      const cacheKey = 'streak:all:summary';
      const cached = await this.redis.get<HabitStreakSummary[]>(cacheKey);
      if (cached) {
        return cached;
      }

      const habits = await this.habitsRepository.findMany();

      const summaries = await Promise.all(
        habits.map(async (habit) => {
          const [currentStreak, longestStreak, isActive] = await Promise.all([
            this.getCurrentStreak(habit.id),
            this.getLongestStreak(habit.id),
            this.isStreakActive(habit.id),
          ]);

          return {
            habitId: habit.id,
            habitTitle: habit.title,
            currentStreak: currentStreak.currentStreak,
            longestStreak: longestStreak.currentStreak,
            isActive,
          };
        }),
      );

      // Cachear por 5 minutos
      await this.redis.set(cacheKey, summaries, 300);

      return summaries;
    } catch (error) {
      this.logger.error('Error getting all habits streaks:', error);
      throw error;
    }
  }

  /**
   * Registra una nueva completitud de hábito
   * Este método debe ser llamado cuando un hábito es marcado como completado
   */
  async recordHabitCompletion(
    habitId: number,
    completedAt?: Date,
  ): Promise<void> {
    try {
      const completionDate = completedAt || new Date();
      const completionDay = this.getStartOfDay(completionDate);

      this.logger.log(
        `Recording completion for habit ${habitId} at ${completionDate.toISOString()}`,
      );

      // Verificar si ya existe una completitud para este día
      const existingCompletion = await (this.prisma as any).habitCompletion.findFirst({
        where: {
          habitId,
          completedAt: {
            gte: completionDay,
            lt: new Date(completionDay.getTime() + 24 * 60 * 60 * 1000),
          },
        },
      });

      if (existingCompletion) {
        this.logger.warn(
          `Habit ${habitId} already has a completion for ${completionDay.toISOString()}`,
        );
        return;
      }

      // Crear nueva completitud
      await (this.prisma as any).habitCompletion.create({
        data: {
          habitId,
          completedAt: completionDate,
        },
      });

      // Invalidar cache relacionado
      await this.invalidateStreakCache(habitId);

      this.logger.log(`Completion recorded for habit ${habitId}`);
    } catch (error) {
      this.logger.error(
        `Error recording completion for habit ${habitId}:`,
        error,
      );
      throw error;
    }
  }

  /**
   * Elimina una completitud de hábito (deshacer)
   */
  async removeHabitCompletion(habitId: number, date?: Date): Promise<void> {
    try {
      const targetDate = date || new Date();
      const targetDay = this.getStartOfDay(targetDate);

      this.logger.log(
        `Removing completion for habit ${habitId} on ${targetDay.toISOString()}`,
      );

      await (this.prisma as any).habitCompletion.deleteMany({
        where: {
          habitId,
          completedAt: {
            gte: targetDay,
            lt: new Date(targetDay.getTime() + 24 * 60 * 60 * 1000),
          },
        },
      });

      // Invalidar cache relacionado
      await this.invalidateStreakCache(habitId);

      this.logger.log(`Completion removed for habit ${habitId}`);
    } catch (error) {
      this.logger.error(
        `Error removing completion for habit ${habitId}:`,
        error,
      );
      throw error;
    }
  }

  // ========== MÉTODOS HELPER PRIVADOS ==========

  /**
   * Obtiene todas las completitudes de un hábito ordenadas por fecha descendente
   */
  private async getHabitCompletions(
    habitId: number,
    limit?: number,
  ): Promise<Array<{ id: number; habitId: number; completedAt: Date }>> {
    try {
      const model = (this.prisma as any).habitCompletion;
      const completions = await model.findMany({
        where: { habitId },
        orderBy: { completedAt: 'desc' },
        ...(limit && { take: limit }),
      });

      return completions;
    } catch (error) {
      this.logger.error(
        `Error fetching completions for habit ${habitId}:`,
        error,
      );
      throw error;
    }
  }

  /**
   * Calcula la racha actual basándose en las completitudes
   */
  private calculateCurrentStreak(
    habitId: number,
    completions: Array<{ completedAt: Date }>,
  ): StreakInfo {
    if (completions.length === 0) {
      return {
        habitId,
        currentStreak: 0,
        startDate: new Date(),
        endDate: new Date(),
      };
    }

    const today = this.getStartOfDay(new Date());
    const lastCompletion = this.getStartOfDay(completions[0].completedAt);

    // Si la última completitud no fue hoy ni ayer, la racha está rota
    const daysSinceLastCompletion = this.getDaysDifference(
      lastCompletion,
      today,
    );
    if (daysSinceLastCompletion > 1) {
      return {
        habitId,
        currentStreak: 0,
        startDate: new Date(),
        endDate: new Date(),
      };
    }

    // Contar días consecutivos desde hoy o ayer
    let streakCount = 0;
    let expectedDate = daysSinceLastCompletion === 0 ? today : lastCompletion;
    let streakStartDate = expectedDate;
    let streakEndDate = expectedDate;

    for (const completion of completions) {
      const completionDay = this.getStartOfDay(completion.completedAt);

      if (completionDay.getTime() === expectedDate.getTime()) {
        streakCount++;
        streakStartDate = completionDay;
        // Mover al día anterior
        expectedDate = new Date(expectedDate.getTime() - 24 * 60 * 60 * 1000);
      } else if (completionDay.getTime() < expectedDate.getTime()) {
        // Hay un hueco en la racha
        break;
      }
      // Si completionDay > expectedDate, saltamos (puede haber múltiples completitudes en un día)
    }

    return {
      habitId,
      currentStreak: streakCount,
      startDate: streakStartDate,
      endDate: streakEndDate,
    };
  }

  /**
   * Calcula la racha más larga en todo el historial
   */
  private calculateLongestStreak(
    habitId: number,
    completions: Array<{ completedAt: Date }>,
  ): StreakInfo {
    if (completions.length === 0) {
      return {
        habitId,
        currentStreak: 0,
        startDate: new Date(),
        endDate: new Date(),
      };
    }

    let maxStreak = 0;
    let maxStreakStart = completions[0].completedAt;
    let maxStreakEnd = completions[0].completedAt;

    let currentStreak = 1;
    let currentStreakStart = this.getStartOfDay(completions[0].completedAt);
    let currentStreakEnd = currentStreakStart;

    // Eliminar duplicados de días
    const uniqueDays = this.getUniqueDays(completions.map((c) => c.completedAt));

    for (let i = 1; i < uniqueDays.length; i++) {
      const prevDay = uniqueDays[i - 1];
      const currentDay = uniqueDays[i];

      const daysDiff = this.getDaysDifference(currentDay, prevDay);

      if (daysDiff === 1) {
        // Días consecutivos
        currentStreak++;
        currentStreakEnd = currentDay;
      } else {
        // Racha rota, verificar si es la más larga
        if (currentStreak > maxStreak) {
          maxStreak = currentStreak;
          maxStreakStart = currentStreakStart;
          maxStreakEnd = currentStreakEnd;
        }

        // Reiniciar racha
        currentStreak = 1;
        currentStreakStart = currentDay;
        currentStreakEnd = currentDay;
      }
    }

    // Verificar la última racha
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
      maxStreakStart = currentStreakStart;
      maxStreakEnd = currentStreakEnd;
    }

    return {
      habitId,
      currentStreak: maxStreak,
      startDate: maxStreakStart,
      endDate: maxStreakEnd,
    };
  }

  /**
   * Obtiene días únicos de un array de fechas
   */
  private getUniqueDays(dates: Date[]): Date[] {
    const uniqueDaysMap = new Map<number, Date>();

    for (const date of dates) {
      const dayStart = this.getStartOfDay(date);
      const timestamp = dayStart.getTime();

      if (!uniqueDaysMap.has(timestamp)) {
        uniqueDaysMap.set(timestamp, dayStart);
      }
    }

    return Array.from(uniqueDaysMap.values()).sort(
      (a, b) => b.getTime() - a.getTime(),
    );
  }

  /**
   * Obtiene el inicio del día (00:00:00) para una fecha
   */
  private getStartOfDay(date: Date): Date {
    const day = new Date(date);
    day.setHours(0, 0, 0, 0);
    return day;
  }

  /**
   * Calcula la diferencia en días entre dos fechas
   */
  private getDaysDifference(date1: Date, date2: Date): number {
    const day1 = this.getStartOfDay(date1);
    const day2 = this.getStartOfDay(date2);
    const diffTime = Math.abs(day2.getTime() - day1.getTime());
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Invalida el cache relacionado con rachas de un hábito
   */
  private async invalidateStreakCache(habitId: number): Promise<void> {
    try {
      await Promise.all([
        this.redis.del(`streak:current:${habitId}`),
        this.redis.del(`streak:longest:${habitId}`),
        this.redis.del(`streak:stats:${habitId}`),
        this.redis.del('streak:all:summary'),
      ]);
    } catch (error) {
      this.logger.warn(`Error invalidating streak cache for habit ${habitId}:`, error);
    }
  }
}