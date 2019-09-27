import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import example from './example';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  example
  // rest of your reducers，其它的reducer
})
export default createRootReducer;