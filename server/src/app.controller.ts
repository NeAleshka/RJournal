import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /*@Get('users/:id')
  getUsers(@Param('id') id: string) {
    return this.appService.getUsers(+id);
  }*/
}
