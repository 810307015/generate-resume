import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from 'Reducers/configureStore';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'Assets/style/main.scss';

ReactDOM.render(<Provider store={store}>
  <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */}
    <> { /* your usual react-router v4/v5 routing */}
      <Switch>
        <Route exact path="/" render={() => (<div>Match</div>)} />
        <Route render={() => (<div>Miss</div>)} />
      </Switch>
    </>
  </ConnectedRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
