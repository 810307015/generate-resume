import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from 'Reducers';
import customMiddleware from './customMiddleware';
// import customLogger from './customLogger';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        customMiddleware, // 自定义promise中间件
        // customLogger
        // ... other middlewares ...
      ),
    ),
  )

  return store;
}