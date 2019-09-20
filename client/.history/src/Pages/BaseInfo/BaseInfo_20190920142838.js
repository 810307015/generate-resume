import React from 'react';
import { RouteWithSubRoutes } from '../../Utils/utils';

function BaseInfo(props) {
  return (
    <div className="BaseInfo">
      基本信息
      {props.routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <span onClick={}>转出Png</span>
    </div>
  );
}

export default BaseInfo;