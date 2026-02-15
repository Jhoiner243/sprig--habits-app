import { Injectable } from '@nestjs/common';
import { CreateReflectionDto } from './dto/create-reflection.dto';
import { UpdateReflectionDto } from './dto/update-reflection.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReflectionsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createReflectionDto: CreateReflectionDto) {
    return (this.prisma as any).reflection.create({
      data: createReflectionDto,
    });
  }

  findAll() {
    return (this.prisma as any).reflection.findMany();
  }

  findOne(id: string) {
    return (this.prisma as any).reflection.findUnique({
      where: { id },
    });
  }

  findByHabit(habitId: string) {
    return (this.prisma as any).reflection.findMany({
      where: { habitId },
      orderBy: { createdAt: 'desc' },
    });
  }

  findByUser(userId: string) {
    return (this.prisma as any).reflection.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  findByHabitLog(habitLogId: string) {
    return (this.prisma as any).reflection.findFirst({
      where: { habitLogId },
    });
  }

  // Get reflections for AI analysis (user's feeling patterns)
  getUserReflectionPatterns(userId: string, limit: number = 10) {
    return (this.prisma as any).reflection.findMany({
      where: { userId },
      include: {
        habit: true,
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  // Get reflections for specific feeling type
  findByFeeling(userId: string, feelingKeyword: string) {
    return (this.prisma as any).reflection.findMany({
      where: {
        userId,
        feeling: {
          contains: feelingKeyword,
        },
      },
      include: {
        habit: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  update(id: string, updateReflectionDto: UpdateReflectionDto) {
    return (this.prisma as any).reflection.update({
      where: { id },
      data: updateReflectionDto,
    });
  }

  remove(id: string) {
    return (this.prisma as any).reflection.delete({
      where: { id },
    });
  }
}
