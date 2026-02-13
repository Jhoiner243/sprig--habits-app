import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { HabitLogsController } from './habit-logs.controller';
import { HabitLogsService } from './habit-logs.service';

@Module({
  controllers: [HabitLogsController],
  providers: [HabitLogsService, PrismaService],
  exports: [HabitLogsService],
})
export class HabitLogsModule {}
