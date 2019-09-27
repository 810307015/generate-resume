const createReducer = (initialState, handlers) => {

  return (state, action) => {

    if (state === undefined) {
      state = initialState;
    }

    const handler = action && action.type ? handlers[action.type] : undefined;

    if (!handler) {
      return state;
    }

    return handler(state, action);
  };

};

export default createReducer;