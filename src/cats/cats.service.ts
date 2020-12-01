import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Cat } from '../interfaces/cat.interface';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat)
        return '添加成功'
    }
    findAll(): Cat[] {
        return this.cats;
    }
    async sendMessage() {
        const url = 'https://oapi.dingtalk.com/robot/send?access_token=3e2bb831805331eba002a82807933b215ba03604b360b00eefec10c77d1b5f05';
        const params = {
            "msgtype": "text",
            "text": {
                "content": "zimin,这是一段来自服务器的内容"
            },
            "at": {
                "isAtAll": false
            }
        }
        const res = await axios.post(url,params)
        console.log(res);
        return '发送成功'
    }
}