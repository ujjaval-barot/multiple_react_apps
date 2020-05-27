import { SET_COUNTRIES } from "../actions/countryActions";

const initialState = {
  loading: false,
  errorMessage: null,
  countries: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${SET_COUNTRIES}_PENDING`:
      return {
        ...state,
        loading: true,
      };
    case `SET_COUNTRIES`: {
      //get menu item from store
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    }
    case `${SET_COUNTRIES}_REJECTED`: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
