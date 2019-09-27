import axios from 'axios';

/**
 * 
 * @param {请求方式} method 
 * @param {请求地址} url 
 * @param {传递的数据} data 
 * @param {额外的配置} customConfig 
 */
const service = (method, url, data, customConfig = {}) => {
  return axios({
    method,
    url,
    data,
    ...customConfig
  });
}

export default service;