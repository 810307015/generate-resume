import React from 'react';
import { RouteWithSubRoutes } from './Utils/utils';

function BaseInfo(props) {
  return (
    <div className="BaseInfo">
      基本信息
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

export default BaseInfo;