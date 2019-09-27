import createReducer from './createReducer';

const initialState = {
  count: 0
};

const handlers = {
  'INCREMENT': (state, action) => ({ ...state, count: state.count + action.data }),
  'DECREMENT': (state, action) => ({ ...state, count: state.count - action.data }),
}

export default createReducer(initialState, handlers);