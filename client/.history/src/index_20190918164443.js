import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import routes from './Routes';
import history from './Utils/history';
import App from './App';

/**
 * 解析routes生成对应的Route
 */
parseRoutes = (routes) => {
  const once = function(r) {
    return routes.map((r, i) => (
      <Route
        key={i}
        path={r.path}
        component={r.component}
      />
    ));
  }
};

ReactDOM.render(<Router routes={routes} history={history}>
  {
    routes.map((r, i) => (
      <Route
        key={i}
        path={r.path}
        component={r.component}
      />
    ))
  }
</Router>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
