import React from 'react';
import { Route } from 'react-router-dom';
import htmlToImage from 'html-to-image';

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const RouteWithExactRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  );
}

const htmlTranslateImage = () => {
  const root = document.getElementById('root');
  htmlToImage.toPng(root)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      document.body.appendChild(img);
    })
}

export {
  RouteWithSubRoutes,
  RouteWithExactRoutes
};