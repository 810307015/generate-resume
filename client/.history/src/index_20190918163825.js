import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import routes from './Routes';
import history from './Utils/history';
import App from './App';

ReactDOM.render(<Router routes={routes} history={history}>
  {
    routes.map((r, i) => (
      <Route
        key={i}
        
      />
    ))
  }
</Router>, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
