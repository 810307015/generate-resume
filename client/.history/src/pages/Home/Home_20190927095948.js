import React from 'react';

import './Home.scss';
import { OmitProps } from 'antd/lib/transfer/renderListBody';

function Home() {
  return (
    <div className="Home">
      主页
      {OmitProps.children}
    </div>
  )
}

export default Home;