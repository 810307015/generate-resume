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