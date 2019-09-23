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

const parseExcel = (url = '', callback) => {
  if (!url || !(/[.xlsx|.xls]$/.test(url))) {
    return console.warn('Please input valid excel url');
  }
  parseXlsx(url).then(data => {
    callback && typeof callback === 'function' && callback(data);
  })
};

export {
  translateToImage,
  parseExcel
};