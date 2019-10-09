import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import SideBar from 'Components/SideBar/SideBar';


import './Home.scss';

function Home(props) {

  return (
    <div className="Home">
      <SideBar />
      <div className="Content">
        <Scrollbars
          height="100%"
          autoHide
        >
          {props.children}
        </Scrollbars>
      </div>
    </div>
  )
}

export default Home;