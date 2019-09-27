import service from './index';

export const translate = (data, success, customConfig) => {
  service('get', 'https://fanyi.baidu.com/v2transapi', data, customConfig)
    .then((res) => {
      success && success(res);
    })
}