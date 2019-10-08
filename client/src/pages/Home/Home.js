import React from 'react';

import SideBar from 'Components/SideBar/SideBar';
import ScrollBar from 'Components/ScrollBar/ScrollBar';

import './Home.scss';

function Home(props) {

  return (
    <div className="Home">
      <SideBar />
      <div className="Content">
        <ScrollBar
          height="100%"
        >
          {props.children}
        </ScrollBar>
      </div>
    </div>
  )
}

export default Home;