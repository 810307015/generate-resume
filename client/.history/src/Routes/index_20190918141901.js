import App from '../App';

const onEnter = (nextState, replaceState) => {
  console.log(nextState, replaceState);
}

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: App },
  onEnter: onEnter,
  childRoutes: []
};

export default routes;