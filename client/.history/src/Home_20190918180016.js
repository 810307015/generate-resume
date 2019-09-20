import React from 'react';
import { RouteWithSubRoutes } from '../../Utils/utils';

function Home(props) {
  return (
    <div className="Home">
      Home
      {props.routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

export default Home;