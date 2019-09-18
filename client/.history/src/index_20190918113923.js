import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory   } from 'react-router';

import * as serviceWorker from './serviceWorker';
import routes from './Routes';

ReactDOM.render(<Router routes={routes} history={browserHistory } />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
