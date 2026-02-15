import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { ReflectionsModule } from '../reflections/reflections.module';
import { HabitsModule } from '../habits/habits.module';

@Module({
  imports: [ReflectionsModule, HabitsModule],
  controllers: [AiController],
  providers: [AiService],
  exports: [AiService],
})
export class AiModule {}
