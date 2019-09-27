import createReducer from './createReducer';

const initialState = {
  count: 0
};

const handlers = {
  'INCREMENT': (state, action) => ({ ...state, count: state.count + 1 }),
  'DECREMENT': (state, action) => ({ ...state, count: state.count - 1 }),
}

export default createReducer(initialState, handlers);