import { Module } from '@nestjs/common';
import { RedisModule } from '../common/redis/redis.module';
import { PrismaModule } from '../prisma/prisma.module';
import { HabitsController } from './habits.controller';
import { HabitsService } from './habits.service';
import { HabitsRepository } from './repositories/habits.repository';
import { RachasService } from './services/rachas.service';

@Module({
  imports: [PrismaModule, RedisModule],
  controllers: [HabitsController],
  providers: [HabitsService, HabitsRepository, RachasService],
  exports: [HabitsService, HabitsRepository, RachasService],
})
export class HabitsModule {}
