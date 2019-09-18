import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import routes from './Routes';

function App(props) {

  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

  return (
    <div className="App">
      123213
    </div>
  );
}

export default App;
