import { Injectable } from '@nestjs/common';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MilestonesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMilestoneDto: CreateMilestoneDto) {
    return (this.prisma as any).milestone.create({
      data: createMilestoneDto,
    });
  }

  findAll() {
    return (this.prisma as any).milestone.findMany({
      where: { isActive: true },
    });
  }

  findOne(id: string) {
    return (this.prisma as any).milestone.findUnique({
      where: { id },
    });
  }

  update(id: string, updateMilestoneDto: UpdateMilestoneDto) {
    return (this.prisma as any).milestone.update({
      where: { id },
      data: updateMilestoneDto,
    });
  }

  remove(id: string) {
    return (this.prisma as any).milestone.delete({
      where: { id },
    });
  }

  // Associate milestone with habit
  associateWithHabit(habitId: string, milestoneId: string) {
    return (this.prisma as any).habitMilestone.create({
      data: {
        habitId,
        milestoneId,
      },
    });
  }

  // Remove association
  removeAssociation(habitId: string, milestoneId: string) {
    return (this.prisma as any).habitMilestone.deleteMany({
      where: {
        habitId,
        milestoneId,
      },
    });
  }

  // Get milestones for a habit
  getMilestonesForHabit(habitId: string) {
    return (this.prisma as any).habitMilestone.findMany({
      where: { habitId },
      include: {
        milestone: true,
      },
    });
  }

  // Update milestone progress
  updateProgress(milestoneId: string, progress: number) {
    return (this.prisma as any).milestone.update({
      where: { id: milestoneId },
      data: {
        current: progress,
      },
    });
  }
}
