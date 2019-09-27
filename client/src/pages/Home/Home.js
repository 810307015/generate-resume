import React, { useState, useEffect } from 'react';

import CircleProgress from 'Components/CircleProgress/CircleProgress';

import './Home.scss';

function Home(props) {

  const [ratio, setRatio] = useState(0);

  const handleClick = () => {
    setRatio(ratio + 10);
  };

  useEffect(() => {
    
  });

  return (
    <div className="Home" onClick={handleClick}>
      主页
      <CircleProgress ratio={ratio} />
      {props.children}
    </div>
  )
}

export default Home;