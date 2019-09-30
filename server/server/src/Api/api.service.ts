import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  getTestString(): string {
    return 'Hello World!';
  }

  getTestData(): Array<number> {
    return [1, 2, 3, 4, 5];
  }
}
