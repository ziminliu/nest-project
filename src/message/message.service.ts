import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
interface Message{
    id: number;
    name: string;
    content: string;
}
@Injectable()
export class MessageService {
  constructor(@InjectModel('Message') private readonly messageModule: Model<Message>) {}

  async findAll(): Promise<Message[]> {
    return await this.messageModule.find().exec();
  }
}
