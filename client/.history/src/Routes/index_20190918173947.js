import Home from '../Home';
import BaseInfo from '../Pages/BaseInfo/BaseInfo';
import AddBaseInfo from '../Pages/BaseInfo/AddBaseInfo';

const routes = [{
  path: '/',
  component: Home
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