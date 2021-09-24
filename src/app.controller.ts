import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/events')
  postEvent(): any {
    return this.appService.postEvent();
  }

  @Post('/messages')
  sendMessage(): void {
    return this.appService.sendMessage();
  }
}
