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
        <div>test scrollbar15</div>
        <div>test scrollbar16</div>
        <div>test scrollbar17</div>
        <div>test scrollbar18</div>
        <div>test scrollbar19</div>
        <div>test scrollbar20</div>
        <div>test scrollbar21</div>
        <div>test scrollbar22</div>
        <div>test scrollbar23</div>
        <div>test scrollbar24</div>
        <div>test scrollbar25</div>
        <div>test scrollbar26</div>
        <div>test scrollbar27</div>
        <div>test scrollbar28</div>
        <div>test scrollbar29</div>
      </ScrollBar>
    </div>
  );
}

export default App;
