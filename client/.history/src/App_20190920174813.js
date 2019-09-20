import React from 'react';
import { Button } from 'antd';

import { translateToImage } from 'Utils';

function App() {
  return (
    <div className="App">
      <Button type="primary" onClick={() => translateToImage()}>test</Button>
    </div>
  );
}

export default App;
