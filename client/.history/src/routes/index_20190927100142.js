import Home from 'Pages/Home/Home';
import Example from 'Pages/Example';

/**
 * 对于路由的用法，最好是
 */
const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    children: [
      {
        path: '/example',
        component: Example,
        exact: true
      }
    ]
  }
];

export default routes;