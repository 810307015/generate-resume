import React from 'react';
import { ConnectedRouter } from 'connected-react-router'

import routes from 'Routes';

function App() {

  const renderRoutes = () => {
    const renderOnce = (route) => {

    }
  };

  return (
    <div className="App">
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </div>
  );
}

export default App;
