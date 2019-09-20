import Home from '../Home';
import BaseInfo from '../Pages/BaseInfo/BaseInfo';
import AddBaseInfo from '../Pages/BaseInfo/AddBaseInfo';

// const routes = [{
//   path: '/baseinfo',
//   component: BaseInfo,
//   routes: [
//     {
//       path: '/baseinfo/add',
//       component: AddBaseInfo
//     }
//   ]
// }];

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: "/baseinfo",
        component: BaseInfo,
        routes: [
          {
            path: "/baseinfo/add",
            component: AddBaseInfo
          }
        ]
      }
    ]
  }
];

export default routes;