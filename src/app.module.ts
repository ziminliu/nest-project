import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ArticleController } from './article/article.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, ArticleController],
  providers: [AppService],
})
export class AppModule {}
