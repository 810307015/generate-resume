import configureStore from './configureStore';

const store = configureStore({
  userinfo: {},
  // {... otherStore} 组合其它的store
});

export default store;