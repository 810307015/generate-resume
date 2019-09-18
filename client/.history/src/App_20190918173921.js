import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import routes from './Routes';

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App(props) {

  return (
    <div className="App">
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

export default App;
