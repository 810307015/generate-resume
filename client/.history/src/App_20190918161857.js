import React from 'react';
import { Router, Route } from 'react-router';

import routes from './Routes';
import history from './Utils/history';

function App() {
  return (
    <div className="App">
      <Router routes={routes} history={history}>
        <Route path="app" component={App}/>
      </Router>
    </div>
  );
}

export default App;
