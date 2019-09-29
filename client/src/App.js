import React from 'react';
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import routes from 'Routes';
import { searchToQuery } from 'Utils';

function App({ history }) {

  /**
   * 获取当前路径下的查询参数，将其转换成对象形式传递给相应的组件，以方便直接使用该查询参数
   */
  const getUrlQuery = () => {
    const { location: { search } } = history;
    return searchToQuery(search);
  };

  /**
   * 将routes渲染成对应的Route组件，并且将history以及query对象传入对应的组件中以供使用
   * @param {一个route对象} route 
   */
  const renderRoutes = (route) => {
    const renderOnce = (route) => {
      const query = getUrlQuery();
      return route.children ?
        <route.component key={route.path} history={history} query={query}>
          {
            route.children.map(route => renderOnce(route))
          }
        </route.component> :
        <Route key={route.path} path={route.path} exact={route.exact} render={(props) => <route.component {...props} query={query} />} />
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
