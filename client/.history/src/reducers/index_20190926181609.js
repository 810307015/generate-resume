import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import 

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  // rest of your reducers，其它的reducer
})
export default createRootReducer;