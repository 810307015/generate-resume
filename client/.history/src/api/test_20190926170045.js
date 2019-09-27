import service from './index';

export const translate = (data, success) => {
  service('get', 'https://fanyi.baidu.com/v2transapi', data)
    .then((res) => {
      success && success(res);
    })
    .catch(err => {
      console.error(err);
    })
}