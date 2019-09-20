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

const validateDataType = (data, type) => {
  switch (type) {
    case 'number':
    case 'string':
    case 'function':
    case 'undefined':
    case 'symbol':
    case 'boolean':
  }
};

export {
  translateToImage,
  parseExcel
};