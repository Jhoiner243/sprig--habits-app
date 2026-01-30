import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      store: 'memory',
      ttl: 60 * 60, // 1 hour
      max: 100,
    }),
  ],
  exports: [CacheModule],
})
export class CacheConfigModule {}
