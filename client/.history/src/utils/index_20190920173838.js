import htmlToImage from 'html-to-image';
import download from 'downloadjs';

const translateToImage = (domId = 'root') => {
  const node = document.getElementById(domId);
  htmlToImage.toPng(node)
    .then(())
}