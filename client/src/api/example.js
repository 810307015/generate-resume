import service from './index';

export const getTestData = (data) => service('get', '/getTestData', data);
export const getTestString = (data) => service('get', '/getTestString', data);
export const setTestData = (data) => service('post', '/setTestData', data);