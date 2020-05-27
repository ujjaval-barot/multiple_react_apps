const initialState = {
  loading: false,
  errorMessage: null,
  asteroids: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `GET_ALL_ASTEROIDS_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `GET_ALL_ASTEROIDS_FULFILLED`: {
      //get menu item from store
      return {
        ...state,
        asteroids: action.payload,
        loading: false,
      };
    }
    case `GET_ALL_ASTEROIDS_REJECTED`: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
