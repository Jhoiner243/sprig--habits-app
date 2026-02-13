import { Injectable } from '@nestjs/common';
import { CreateHabitLogDto } from './dto/create-habit-log.dto';
import { UpdateHabitLogDto } from './dto/update-habit-log.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HabitLogsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createHabitLogDto: CreateHabitLogDto) {
    return (this.prisma as any).habitLog.create({
      data: createHabitLogDto,
    });
  }

  findAll() {
    return (this.prisma as any).habitLog.findMany();
  }

  findOne(id: string) {
    return (this.prisma as any).habitLog.findUnique({
      where: { id },
    });
  }

  findByHabit(habitId: string) {
    return (this.prisma as any).habitLog.findMany({
      where: { habitId },
      orderBy: { completedAt: 'desc' },
    });
  }

  findByUser(userId: string) {
    return (this.prisma as any).habitLog.findMany({
      where: { userId },
      orderBy: { completedAt: 'desc' },
    });
  }

  findByUserAndDate(userId: string, date: Date) {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return (this.prisma as any).habitLog.findMany({
      where: {
        userId,
        completedAt: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
      include: {
        habit: true,
      },
    });
  }

  getCalendarView(userId: string, year: number, month: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    return (this.prisma as any).habitLog.findMany({
      where: {
        userId,
        completedAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      include: {
        habit: true,
      },
      orderBy: { completedAt: 'asc' },
    });
  }

  update(id: string, updateHabitLogDto: UpdateHabitLogDto) {
    return (this.prisma as any).habitLog.update({
      where: { id },
      data: updateHabitLogDto,
    });
  }

  remove(id: string) {
    return (this.prisma as any).habitLog.delete({
      where: { id },
    });
  }
}
