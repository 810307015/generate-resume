import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { history } from 'Store/configureStore';
import store from 'Store';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'Assets/style/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
