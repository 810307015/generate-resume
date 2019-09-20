import htmlToImage from 'html-to-image';
import download from 'downloadjs';
import parseXlsx from 'excel';

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

const parseExcel = (url = '') => {
  if (!url || /[.xlsl|]/) {

  }
};

export {
  translateToImage
};