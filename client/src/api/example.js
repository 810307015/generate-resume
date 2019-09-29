import service from './index';

export const getTestData = (data) => service('get', '/test', data);
export const getTestString = (data) => service('get', '/', data);