/* istanbul ignore file */
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { envs } from './config/envs';
import { HttpExceptionFilter } from './common/filters/httpException.filter';

/**
 * The bootstrap function.
 */
async function bootstrap() {
  /**
   * Create the app.
   */
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });

  app.setGlobalPrefix('api');

  app.useBodyParser('json', {
    limit: '50mb',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  /**
   * Create the swagger document.
   */
  const config = new DocumentBuilder()
    .setTitle('INVENTARIO BACK')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  /**
   * Create the swagger module.
   */
  const document = SwaggerModule.createDocument(app, config);

  if (process.env.NODE_ENV !== 'production') {
    SwaggerModule.setup('/docs', app, document);
  }

  await app.listen(envs.PORT);

  Logger.log(
    `Server running on http://localhost:${envs.PORT}/docs`,
    'Bootstrap',
  );
}
bootstrap();
