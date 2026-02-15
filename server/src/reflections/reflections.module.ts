import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ReflectionsController } from './reflections.controller';
import { ReflectionsService } from './reflections.service';

@Module({
  controllers: [ReflectionsController],
  providers: [ReflectionsService, PrismaService],
  exports: [ReflectionsService],
})
export class ReflectionsModule {}
