import axios from 'axios';

const service = (method, url, data) => {
  return axios[method]
}