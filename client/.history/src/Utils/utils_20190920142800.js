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
      window.open(dataUrl, '_self');
    })
    .catch(function (error) {
      console.error('转成图片失败', error);
    });
}

export {
  RouteWithSubRoutes,
  RouteWithExactRoutes,
  htmlTranslateImage
};