import htmlToImage from 'html-to-image';
import download from 'downloadjs';
import parseXlsx from 'excel';

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
 * @param {excel的文件路径} url 
 * @param {读取excel之后的回调方法} callback 
 */
const parseExcel = (url = '', callback) => {
  if (!url || !(/[.xlsx|.xls]$/.test(url))) {
    return console.warn('Please input valid excel url');
  }
  parseXlsx(url).then(data => {
    callback && typeof callback === 'function' && callback(data);
  })
};

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

export {
  translateToImage,
  parseExcel,
  validateDataType
};