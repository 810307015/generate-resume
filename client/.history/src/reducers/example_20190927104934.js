import createReducer from './createReducer';

const initialState = {
  state: 0
};

const handlers = {
  'INCREMENT': (state, action) => (state + 1),
  'DECREMENT': (state, action) => (state - 1),
}

export default createReducer(initialState, handlers);