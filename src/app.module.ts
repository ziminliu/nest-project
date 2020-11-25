import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { ArticleController } from './article/article.controller';
import { MessageController } from './message/message.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/project')],
  controllers: [AppController, CatsController, ArticleController, MessageController],
  providers: [AppService],
})
export class AppModule {}
