import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces/nest-express-application.interface';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
