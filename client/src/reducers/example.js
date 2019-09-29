import createReducer from './createReducer';

const initialState = {
  count: 0,
  testData: [] // 测试异步中间件
};

const handlers = {
  'INCREMENT': (state, action) => ({ ...state, count: state.count + action.data }),
  'DECREMENT': (state, action) => ({ ...state, count: state.count - action.data }),
  'GET_TEST_DATA': (state, action) => ({ ...state, testData: action.data })
}

export default createReducer(initialState, handlers);