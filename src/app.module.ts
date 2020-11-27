import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ArticleController } from './article/article.controller';
import { LoggerMiddleware, logger } from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule],
  controllers: [AppController, ArticleController],
  providers: [AppService],
})
// 中间件不能在 @Module() 装饰器中列出。我们必须使用模块类的 configure() 方法来设置它们
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, logger)
      .exclude({ path: 'cats/a', method: RequestMethod.GET })
      .forRoutes({ path: 'cats', method: RequestMethod.GET })
  }
}
