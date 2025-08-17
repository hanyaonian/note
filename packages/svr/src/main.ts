import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import dotenv from 'dotenv';

const config = dotenv.config().parsed;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config?.SERVER_PORT ?? 3000);
}
bootstrap();
