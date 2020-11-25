import { Controller, Get } from '@nestjs/common';
import { MessageService } from './message.service';
@Controller('message')
export class MessageController {

    constructor(private readonly messageService: MessageService) { }
    @Get()
    index(): any {
        return this.messageService.findAll()
    }
}
