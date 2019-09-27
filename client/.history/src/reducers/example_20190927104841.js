import createReducer from './createReducer';

const initialState = {
  state: 0
};

const handlers = {
  'INCREMENT': () => (state + 1)
}

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default counterReducer;