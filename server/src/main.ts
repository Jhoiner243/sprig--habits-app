import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger()
  const globalPipe = new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  })

  app.useGlobalPipes(globalPipe)

  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Main running on port ${process.env.PORT ?? 3000}`)
}
void bootstrap();
