import { Controller, Get } from '@nestjs/common';

@Controller('message')
export class MessageController {
    @Get()
    index(){
        return 'all message'
    }
}
