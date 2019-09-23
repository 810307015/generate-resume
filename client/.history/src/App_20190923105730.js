import React from 'react';
import { Button } from 'antd';

import { translateToImage } from 'Utils';
import ScrollBar from 'Components/ScrollBar/ScrollBar';

function App() {
  return (
    <div className="App">
      <Button type="primary" onClick={() => translateToImage()}>test</Button>
      <ScrollBar>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
        <div>test scrollbar</div>
      </ScrollBar>
    </div>
  );
}

export default App;
