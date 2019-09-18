import App from '../App';
import BaseInfo from '../Pages/BaseInfo/BaseInfo';

const onEnter = (nextState, replaceState) => {
  console.log(nextState, replaceState);
}

const routes = [{
  path: '/',
  component: App,
  onEnter: onEnter
}, {
  path: '/baseinfo',
  component: BaseInfo
}];

export default routes;