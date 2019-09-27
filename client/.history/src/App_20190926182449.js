import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from 'Routes';

function App() {

  const renderRoutes = (route) => {
    const renderOnce = (route) => {
      return route.children ?
        <route path={route.path} exact={route.exact} component={route.component}>
          {renderOnce(route.children)}
        </route> : <route path={route.path} exact={route.exact} component={route.component} />
    }
    return renderOnce(route);
  };

  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Router>
          {
            renderRoutes()
          }
        </Router>
      </ConnectedRouter>
    </div>
  );
}

export default App;
