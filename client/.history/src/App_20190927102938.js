import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from 'Routes';

function App({ history }) {
  /**
   * 将routes渲染成对应的Route组件，并且将history对象传入对应的组件中以供使用
   * @param {一个route对象} route 
   */
  const renderRoutes = (route) => {
    const renderOnce = (route) => {
      return route.children ?
        <route.component key={route.path} history={history}>
          {
            route.children.map(route => renderOnce(route))
          }
        </route.component> :
        <Route key={route.path} history={history} {...route} />
    }
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
