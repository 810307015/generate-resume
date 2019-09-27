/**
 * 对所有的reducer做一层封装
 * @param {初始化的state}} initialState 
 * @param {初始化的调用action的方法} handlers 
 */
const createReducer = (initialState, handlers) => {

  return (state, action) => {
    let _state = initialState;

    if (state !== undefined) {
      _state = state;
    }

    const handler = action && action.type ? handlers[action.type] : undefined;

    if (!handler) {
      return _state;
    }

    return handler(_state, action);
  };

};

export default createReducer;