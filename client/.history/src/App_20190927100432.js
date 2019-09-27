import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from 'Routes';

function App({ history }) {

  /**
   * 将routes渲染成对应的Route组件
   * @param {一个route对象} route 
   */
  const renderRoutes = (route) => {
    const renderOnce = (route) => {
      return route.children ?
        <route.component key={route.path}>
          {
            route.children.map(route => renderOnce(route))
          }
        </route.component> :
        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
    }
    return renderOnce(route);
  };

  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Router>
          <RouteWrapperComponent routes={routes} />
        </Router>
      </ConnectedRouter>
    </div>
  );
}

export default App;