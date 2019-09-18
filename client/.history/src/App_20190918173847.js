import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import routes from './Routes';

function App(props) {

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

  return (
    <div className="App">
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

export default App;
