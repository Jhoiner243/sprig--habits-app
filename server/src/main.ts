import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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

  const config = new DocumentBuilder()
  .setTitle('Api sprig - habit tracker')
  .setDescription('This app is for keep the habits tracker')
  .setVersion('1.0')
  .build()

  //The factory method SwaggerModule.createDocument() is used specifically to generate the Swagger document when you request it
  const documentFactory = () => SwaggerModule.createDocument(app, config)
  
  SwaggerModule.setup('api', app, documentFactory)

  await app.listen(process.env.PORT ?? 3000);
  logger.log(`Main running on port ${process.env.PORT ?? 3000}`)
}
void bootstrap();
