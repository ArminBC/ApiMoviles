import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/constants';

@Public()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("demo")
  getDemo(): Object {
    return {
      name: "Demo",
      phone: "9981714200",
      email: "demo@gmail.com",
      rfc: "wsedr234556678"
    }
  }
}
