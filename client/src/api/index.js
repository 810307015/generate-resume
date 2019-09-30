import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么，对登陆状态进行验证
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么，对数据进行特殊处理，直接将数据拿出来
  if (/^2\w{2}$/.test(response.status)) {
    return response.data;
  } else {
    throw new Error('请求失败');
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

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