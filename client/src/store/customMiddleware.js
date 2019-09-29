/**
 * 自定义promise中间件，对异步的action作处理，action统一只传type和payload两个值，payload为action的除了type的所有参数集合
 * 需要后端返回的数据格式保持一致，统一为{ data, status, msg }，
 * 需要返回一个带data的json，data为此次promise请求的结果，
 * 如果返回的数据不是data也可以，在配置action时传一个customField的字段告诉中间件其返回的字段名称
 * 同时可以不设置type，直接把action当做一个普通的api请求，保持整体的调用api都是通过action来调用，风格一致。
 */
const customMiddleware = store => next => action => {
  const { payload: { param, promise, success, error, customField } } = action;
  if (!promise) {
    return next(action);
  }

  return promise(param).then((res) => {
    action.payload.data = customField ? res[customField] : res.data;
    success && success(res);
    next(action);
  }).catch(err => {
    error && error(err);
  });
}

export default customMiddleware;