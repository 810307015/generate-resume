import React from 'react';
import { Router, Route } from 'react-router';

import BaseInfo from './Pages/BaseInfo/BaseInfo';
import routes from './Routes';
import history from './Utils/history';

function App() {
  return (
    <div className="App">
      <Router routes={routes} history={history}>
        <Route path="baseinfo" component={BaseInfo}/>
      </Router>
    </div>
  );
}

export default App;
