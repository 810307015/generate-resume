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
  return objectType.slice(8, objectType.length - 1).toLowerCase();
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
    const context = this;
    const args = Array.prototype.slice.apply(arguments);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
};

/**
 * 
 * @param {需要节流的函数} fn 
 * @param {间隔时间} delay 
 */
const throttle = (fn, delay = 500) => {
  let last = null;
  let timer = null;
  return function() {
    const context = this;
    const args = arguments;
    const now = +new Date();
    if (last && now < last + delay) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, delay)
    } else {
      last = now;
      fn.apply(context, args);
    }
  }
};

/**
 * 
 * @param {需要深拷贝的对象} obj 
 */
const deepClone = (obj) => {
  let _obj = Array.isArray(obj) ? [] : {};
  if (obj && ['object', 'array'].includes(getRealObjectType(obj))) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && ['object', 'array'].includes(getRealObjectType(obj[key]))) {
          _obj[key] = deepClone(obj[key]);
        } else {
          _obj[key] = obj[key];
        }
      }
    }
  }
  return _obj;
};

/**
 * 将查询字符串转化成json的格式
 * @param {查询字符串} search 
 */
const searchToQuery = (search) => {
  if (search.length <= 1) {
    return {};
  }
  const queryArr = search.slice(1).split('&');
  const query = {};
  queryArr.forEach(q => {
    const [key, value = key] = q.split('=');
    query[key] = value;
  });
  return query;
};

export {
  translateToImage,
  getRealObjectType,
  debounce,
  throttle,
  deepClone,
  searchToQuery
};