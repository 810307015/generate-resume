import xlsx from 'node-xlsx';
import { resolve } from 'path';

/**
 * 解析excel文件
 * @param fileName 文件名称
 * @param fileBuffer 回调函数
 */
export const parseExcel = (file) => {
  if (typeof file === 'object') {
    return xlsx.parse(file);
  }
  const path = resolve(__dirname, './../public', file);
  return xlsx.parse(path);
}

/**
 * 遍历一下excel解析过后的数据
 * @param data 解析excel后的数据
 */
export const rescueData = (data) => {
  data.forEach(sheet => {
    console.log(sheet.data);
  })
}