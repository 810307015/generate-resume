import App from '../App';

const onEnter = () => {
  
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: App },
  onEnter: onEnter,
  childRoutes: []
};

export default routes;