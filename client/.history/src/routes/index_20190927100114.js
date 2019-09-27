import Home from 'Pages/Home/Home';
import Example from 'Pages/Example';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    children: [
      {
        path: '/example',
        component: Example,
        exact: true,
        children: []
      }
    ]
  }
];

export default routes;