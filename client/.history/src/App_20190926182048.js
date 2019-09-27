import React from 'react';

function App() {

  return (
    <div className="App">
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </div>
  );
}

export default App;
