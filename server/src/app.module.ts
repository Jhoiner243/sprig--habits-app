import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HabitsModule } from './habits/habits.module';
import { PrismaModule } from './prisma/prisma.module';
import { CacheConfigModule } from './cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    CacheConfigModule,
    HabitsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
