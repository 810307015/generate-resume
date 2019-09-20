import React from 'react';
import { RouteWithSubRoutes, htmlTranslateImage } from '../../Utils/utils';

import './BaseInfo.scss';

function BaseInfo(props) {
  return (
    <div className="BaseInfo">
      基本信息
      {props.routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <span onClick={htmlTranslateImage}>转出Png</span>
    </div>
  );
}

export default BaseInfo;