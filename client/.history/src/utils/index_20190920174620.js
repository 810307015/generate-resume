import htmlToImage from 'html-to-image';
import download from 'downloadjs';

const translateToImage = (domId = 'root', fileName = 'test.png') => {
  const node = document.getElementById(domId);
  htmlToImage.toPng(node)
    .then((dataUrl) => {
      console.log(dataUrl);
      download(dataUrl, fileName);
    })
    .catch(err => {
      console.error('can\'t translate to file', err);
    })
}

export {
  translateToImage
};