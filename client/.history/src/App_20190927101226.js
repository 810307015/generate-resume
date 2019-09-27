import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from 'Routes';

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
      <Route key={route.path} {...route} />
  }
  return renderOnce(route);
};

/**
 * 对多级子路由作一层包裹，给以后拓展留点空间
 * @param {多个子路由} param0 
 */
function RouteWrapperComponent({ routes }) {
  return (
    <div className="RouteWrapperComponent">
      {
        routes.map(route => renderRoutes(route))
      }
    </div>
  );
}

function App({ history }) {

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