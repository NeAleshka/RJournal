import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Server start!';
  }

  getUsers(id: number): string {
    return `Users ID ${id}`;
  }
}
