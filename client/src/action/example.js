import { getTestData, getTestString, setTestData } from 'Api/example';

export const increment = (data = 1) => ({
  type: 'INCREMENT',
  payload: {
    data
  }
})

export const decrement = (data = 1) => ({
  type: 'DECREMENT',
  payload: {
    data
  }
})

export const testPromise = (param = {}, success, error) => ({
  type: 'GET_TEST_DATA',
  payload: {
    promise: getTestData,
    param,
    success,
    error
  }
})

export const testNoType = (param = {}, success, error) => ({
  payload: {
    promise: getTestString,
    param,
    success,
    error
  }
});

export const testPostData = (param = {}, success, error) => ({
  payload: {
    promise: setTestData,
    param,
    success,
    error
  }
})