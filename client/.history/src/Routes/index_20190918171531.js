import App from '../App';
import BaseInfo from '../Pages/BaseInfo/BaseInfo';

const routes = [{
  path: '/',
  component: App
}, {
  path: '/baseinfo',
  component: BaseInfo,
  childRoutes: [
    {
      path: '/baseinfo/add',
      component: AddBaseInfo
    }
  ]
}];

export default routes;