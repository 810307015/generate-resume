import { getTestData, getTestString } from 'Api/example';

export const increment = (data = 1) => ({
  type: 'INCREMENT',
  data
})

export const decrement = (data = 1) => ({
  type: 'DECREMENT',
  data
})

export const testPromise = (param = {}, success, error) => ({
  type: 'GET_TEST_DATA',
  promise: getTestData,
  param,
  success,
  error
})

export const testNoType = (param = {}, success, error) => ({
  param,
  promise: getTestString,
  success,
  error
});