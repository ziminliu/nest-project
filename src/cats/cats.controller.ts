import { Controller, Get, Query, Post, Body, HttpCode, Redirect, Param, Res, HttpStatus } from '@nestjs/common';
import { AppService } from '../app.service';
import { CreateCatDto } from './creat-cat.dto';

// 类库express 响应方式
import { Response } from 'express';
@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) { }
  @Get()
  getCatsParams(@Query() params): string {
    return params;
  }
  // 路由通配符
  @Get('a*b')
  getCatsRoute(@Query() params): string {
    return 'a*b';
  }
  @Post()
  postCreate(@Body() body) {
    return body;
  }
  // 状态码
  @Post()
  @HttpCode(204)
  createNew() {
    return 'this action adds a new cat'
  }
  // 重定向
  @Get('baidu')
  @Redirect('https://www.baidu.com')
  redirect() {
    console.log('redirect ')
  }
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    console.log(version)
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
  // 路由参数
  @Get('param/:id')
  findOne(@Param() params) {
    console.log(params);
    return `This action returns a #${params.id} cat`
  }
  // Async/await
  @Get('async')
  async findAll(): Promise<any[]> {
    return [];
  }
  @Post('post')
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat' + createCatDto;
  }
  @Post('express')
  createExpress(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send('hello ');
  }

  @Get('express')
  findExpress(@Res() res: Response) {
    res.status(HttpStatus.OK).json(['12']);
  }
}
