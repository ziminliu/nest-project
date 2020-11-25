import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
@Module({
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})
export class CatsModule { 
    // 提供者也可以注入到模块(类)中（例如，用于配置目的）：
  constructor(private readonly catsService: CatsService) {}
}