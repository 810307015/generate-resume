import Home from 'Pages/Home/Home';
import Example from 'Pages/Example';

/**
 * 对于路由的用法，最好是能在每一个模块里加一个根组件，用来处理子路由的内容
 */
const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    children: [
      {
        path: '/example/:id',
        component: Example,
        exact: true
      }
    ]
  }
];

export default routes;