import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log('request...记录日志');
        next();
    }
}

export function logger(req, res, next) {
    console.log('function middleware')
    next()
}