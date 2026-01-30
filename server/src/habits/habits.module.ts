import { Module } from '@nestjs/common';
import { HabitsController } from './habits.controller';
import { HabitsService } from './habits.service';
import { HabitsRepository } from './repositories/habits.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { RedisModule } from '../common/redis/redis.module';

@Module({
  imports: [PrismaModule, RedisModule],
  controllers: [HabitsController],
  providers: [HabitsService, HabitsRepository],
  exports: [HabitsService, HabitsRepository],
})
export class HabitsModule {}
