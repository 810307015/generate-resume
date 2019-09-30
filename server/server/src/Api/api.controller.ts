import { Controller, Get, Post, Body } from '@nestjs/common';

import { ApiService } from './api.service';
import { wrapperResponse } from '../Utils/index';

@Controller('/api')
export class ApiController {
  constructor(private readonly apiService: ApiService) { }

  @Get('/getTestString')
  getTestString(): object {
    return wrapperResponse(this.apiService.getTestString());
  }

  @Get('/getTestData')
  getTestData(): object {
    return wrapperResponse(this.apiService.getTestData());
  }

  @Post('/setTestData')
  setTestData(@Body() body): object {
    return wrapperResponse(body);
  }

}
