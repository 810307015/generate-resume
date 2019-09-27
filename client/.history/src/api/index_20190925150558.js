import axios from 'axios';

const service = (method, url, data, customConfig = {}) => {
  return axios({
    method,
    url,
    data,
    ...customConfig
  });
}

export default service;