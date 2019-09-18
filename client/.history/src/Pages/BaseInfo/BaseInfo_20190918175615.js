import React from 'react';
import utils from '../../Utils/utils';

function BaseInfo(props) {
  return (
    <div className="BaseInfo">
      基本信息
      {props.routes.map((route, i) => (
        <utils.RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

export default BaseInfo;