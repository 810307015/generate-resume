import React from 'react';

import './Home.scss';

function Home(props) {
  console.log(props);
  return (
    <div className="Home">
      主页
      {props.children}
    </div>
  )
}

export default Home;