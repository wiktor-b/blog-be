import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import { ValidationErrorFilter } from './mongo-validation.filer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  app.useGlobalFilters(new ValidationErrorFilter());
  await app.listen(3000);
}
bootstrap();
