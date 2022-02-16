export const actionCreator = (type) => {
  return (payload) => {
    return {
      type,
      ...payload,
    };
  };
};

export const asyncActionCreator = (type) => {
  return {
    start: (request) => {
      return {
        type: `${type}_START`,
        request,
      };
    },
    success: (data) => {
      return {
        type: `${type}_SUCCESS`,
        data,
      };
    },
    error: (error) => {
      return {
        type: `${type}_ERROR`,
        error,
      };
    },
    set: (payload) => {
      return {
        type: `${type}_SET`,
        payload,
      };
    },
  };
};

export const createReducer = (initialState = {}, actionHandlerFuncs = {}) => {
  return (state = initialState, action) => {
    const actionHandler = actionHandlerFuncs[action.type];
    return actionHandler ? actionHandler(state, action) : state;
  };
};

export const createAsyncReducer = (actionType) => {
  return createReducer(
    {
      loading: false,
      request: null,
      error: null,
      data: null,
    },
    {
      [`${actionType}_START`]: (state, action) => ({
        ...state,
        loading: true,
        error: null,
        request: action.request,
      }),
      [`${actionType}_SUCCESS`]: (state, action) => ({
        ...state,
        loading: false,
        data: action.data,
      }),
      [`${actionType}_ERROR`]: (state, action) => ({
        ...state,
        loading: false,
        error: action.error,
      }),
      [`${actionType}_SET`]: (state, action) => ({
        ...state,
        ...action.payload,
      }),
    }
  );
};
