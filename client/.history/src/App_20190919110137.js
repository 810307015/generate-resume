import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RouteWithSubRoutes } from './Utils/utils';

import routes from './Routes';

function App(props) {

  return (
    <div className="App">
      <Router>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Router>
    </div>
  );
}

export default App;
