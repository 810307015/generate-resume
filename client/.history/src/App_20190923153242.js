import React from 'react';
import { Button } from 'antd';

import { translateToImage } from 'Utils';
import ScrollBar from 'Components/ScrollBar/ScrollBar';

function App() {
  return (
    <div className="App">
      <Button type="primary" onClick={() => translateToImage()}>test</Button>
      <ScrollBar>
        <div>test scrollbar1</div>
        <div>test scrollbar2</div>
        <div>test scrollbar3</div>
        <div>test scrollbar4</div>
        <div>test scrollbar5</div>
        <div>test scrollbar6</div>
        <div>test scrollbar7</div>
        <div>test scrollbar8</div>
        <div>test scrollbar9</div>
        <div>test scrollbar10</div>
        <div>test scrollbar11</div>
        <div>test scrollbar12</div>
        <div>test scrollbar12</div>
        <div>test scrollbar14</div>
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
