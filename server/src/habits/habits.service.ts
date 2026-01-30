import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit } from './entities/habit.entity';

@Injectable()
export class HabitsService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  // Legacy methods using original entity (for gradual migration)
  findAllLegacy(): Promise<Habit[]> {
    // Legacy implementation - keep for backward compatibility
    return Promise.resolve([]);
  }

  // New Prisma methods with Redis caching
  async findAll() {
    const cacheKey = 'habits_all';
    let habits = await this.cacheManager.get(cacheKey);

    if (!habits) {
      habits = await this.prisma.habit.findMany();
      await this.cacheManager.set(cacheKey, habits, 300); // 5 minutes
    }

    return habits;
  }

  async findOne(id: number) {
    const cacheKey = `habit_${id}`;
    let habit = await this.cacheManager.get(cacheKey);

    if (!habit) {
      habit = await this.prisma.habit.findUnique({ where: { id } });
      if (habit) {
        await this.cacheManager.set(cacheKey, habit, 300);
      }
    }

    return habit;
  }

  async create(createHabitDto: CreateHabitDto) {
    const habit = await this.prisma.habit.create({
      data: {
        title: createHabitDto.title,
        description: createHabitDto.description,
      },
    });

    // Invalidate cache
    await this.cacheManager.del('habits_all');

    return habit;
  }

  async update(id: number, updateHabitDto: UpdateHabitDto) {
    const habit = await this.prisma.habit.update({
      where: { id },
      data: updateHabitDto,
    });

    // Invalidate cache
    await this.cacheManager.del('habits_all');
    await this.cacheManager.del(`habit_${id}`);

    return habit;
  }

  async remove(id: number) {
    await this.prisma.habit.delete({ where: { id } });

    // Invalidate cache
    await this.cacheManager.del('habits_all');
    await this.cacheManager.del(`habit_${id}`);
  }
}
