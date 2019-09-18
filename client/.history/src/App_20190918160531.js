import React from 'react';
import { Router  } from 'react-router';
import { Router  } from 'react-router';

import routes from './Routes';
import history from './Utils/history';

function App() {
  return (
    <div className="App">
      <Router routes={routes} history={history} />
    </div>
  );
}

export default App;
