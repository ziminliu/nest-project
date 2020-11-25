import { Controller, Get, Query, Post, Body } from '@nestjs/common';
@Controller('article')
export class ArticleController {
    @Get()
    findAll(@Query() query): string {
        console.log(query);
        return query;
    }
    @Post()
    PostArticle(@Body() body) {
        console.log(body)
        return '添加成功'
    }
}
