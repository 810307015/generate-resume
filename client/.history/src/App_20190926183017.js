import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from 'Routes';

function App({ history }) {

  const renderRoutes = (route) => {
    const renderOnce = (route) => {
      console.log(route)
      return route.children ?
        <Route path={route.path} exact={route.exact} component={route.component}>
          {
            renderOnce(route.children)
          }
        </Route> :
        <Route path={route.path} exact={route.exact} component={route.component} />
    }
    console.log(renderOnce(route))
    return renderOnce(route);
  };

  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Router>
          {
            routes.map(route => renderRoutes(route))
          }
        </Router>
      </ConnectedRouter>
    </div>
  );
}

export default App;