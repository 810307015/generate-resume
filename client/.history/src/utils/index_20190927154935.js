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
 * @param {需要判断的真实对象类型的数据} obj 
 */
const getRealObjectType = (obj) => {
  if (typeof obj !== 'object') {
    return typeof obj;
  }
  const objectType = Object.prototype.toString.apply(obj);
  return objectType.slice(8, objectType.length - 2).toLowerCase();
};

/**
 * 
 * @param {需要防抖的函数} fn 
 * @param {延迟时间} delay 
 */
const debounce = (fn, delay = 500) => {
  let timer = null;

  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    const args = Array.prototype.slice.apply(arguments);
    timer = setTimeout(function () {
      fn.apply(null, args);
    }, delay);
  };
};

/**
 * 
 * @param {需要深拷贝的对象} obj 
 */
const deepClone = (obj) => {
  let _obj = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === 'object') {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          _obj[key] = deepClone(obj[key]);
        } else {
          _obj[key] = obj[key];
        }
      }
    }
  }
  return _obj;
};

export {
  translateToImage,
  getRealObjectType,
  debounce,
  deepClone
};