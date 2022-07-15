import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/apps/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(1808);
}
bootstrap();
