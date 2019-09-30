import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import * as serveStatic from 'serve-static';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use('/public', serveStatic(join(__dirname, './public'), {
    maxAge: '1d',
    extensions: ['jpg', 'jpeg', 'png', 'gif'],
  }));
  await app.listen(8080);
}
bootstrap();
