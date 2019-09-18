import App from '../App';
import BaseInfo from '../Pages/BaseInfo/BaseInfo';
import AddBaseInfo from '../Pages/BaseInfo/AddBaseInfo';

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