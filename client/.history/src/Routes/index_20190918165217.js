import App from '../App';
import BaseInfo from '../Pages/BaseInfo/BaseInfo';

const onEnter = (nextState, replaceState) => {
  console.log(nextState, replaceState);
}

const routes = [{
  path: '/',
  component: App,
  onEnter: onEnter,
  indexRoute: App,
  childRoutes: [
    {
      path: '/baseinfo',
      component: BaseInfo
    }
  ]
}];

export default routes;