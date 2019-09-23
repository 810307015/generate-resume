import htmlToImage from 'html-to-image';
import download from 'downloadjs';

/**
 * 
 * @param {节点id} domId 
 * @param {导出的文件名称} fileName 
 */
const translateToImage = (domId = 'root', fileName = 'test.png') => {
  const node = document.getElementById(domId);
  htmlToImage.toPng(node)
    .then((dataUrl) => {
      download(dataUrl, fileName);
    })
    .catch(err => {
      console.error('can\'t translate to file', err);
    })
}

/**
 * 
 * @param {*需要判断类型的数据} data 
 * @param {*需要判断的类型} type 
 */
const validateDataType = (data, type) => {
  let flag = false;
  switch (type) {
    case 'number':
    case 'string':
    case 'function':
    case 'undefined':
    case 'symbol':
    case 'boolean':
    case 'object':
      flag = typeof data === type;
      break;
    case 'null':
      flag = Object.prototype.toString.apply(data) === '[object Null]';
      break;
    case 'NaN':
      flag = isNaN(data);
      break;
  }

  return flag;
};

export default {
  translateToImage,
  validateDataType
};