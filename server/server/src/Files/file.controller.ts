import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

import { wrapperResponse } from '../Utils/index';
import { parseExcel, rescueData } from '../Utils/excel';

@Controller()
export class FileController {
  constructor() { }

  @Post('/api/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    const mimetype = file.mimetype;
    const suffix = mimetype.split('/');
    const name = file.originalname || (+new Date()) + suffix[suffix.length - 1];
    const dir = resolve(__dirname + './../public');
    try {
      if (!existsSync(dir)) {
        mkdirSync(dir);
      }
      writeFileSync(`${dir}/${name}`, file.buffer);
      // const data = parseExcel(file.buffer);
      // rescueData(data);
    } catch (err) {
      console.log(err);
      return wrapperResponse(`/public/${name}`, 500, '上传失败');
    }
    return wrapperResponse(`/public/${name}`, 200, '上传成功');
  }
}
