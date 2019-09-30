import { Module } from '@nestjs/common';

import { FileController } from './Files/file.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './Api/api.module';

@Module({
  imports: [ApiModule],
  controllers: [AppController, FileController],
  providers: [AppService],
})
export class AppModule { }
