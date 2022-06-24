import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Thinh';
  }
  getXinChao(): string{
    return "Thinh 123"
  }
}
