import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisService } from './redis.service';

@Module({
  imports: [
    CacheModule.register({
      store: 'memory',
      ttl: 60 * 60, // 1 hour default
      max: 100,
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
