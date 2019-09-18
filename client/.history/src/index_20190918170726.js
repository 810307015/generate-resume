import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import routes from './Routes';
import history from './Utils/history';
import App from './App';

/**
 * 解析routes生成对应的Route
 */
const parseRoutes = (routes) => {
  const once = function(routes) {
    return routes.map((r, i) => (
      <Route
        key={i}
        path={r.path}
        onEnter={r.onEnter}
        component={r.component}
      >
        {/* {
          r.childRoutes && r.childRoutes.length > 0 &&
          once(r.childRoutes)
        } */}
      </Route>
    ));
  }
  return once(routes);
};

ReactDOM.render(<Router routes={routes} history={history}>
  {
    parseRoutes(routes)
  }
</Router>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
