const customLogger = store => next => action => {
  const { type, data } = action;
  console.log('-------------------------------------');
  console.log(`type = ${type}`);
  console.log(`data = `, data);
  return next(action);
};

export default customLogger;