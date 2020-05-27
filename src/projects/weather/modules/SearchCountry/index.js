import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SET_COUNTRIES } from "../../../../actions/countryActions";

import SearchCountry from "./SearchCountry";

export default withRouter(
  connect(
    (state) => ({
      countries: state.country.countries,
    }),
    (dispatch) => ({
      setCountries: (data) => {
        dispatch(SET_COUNTRIES(data));
      },
    })
  )(SearchCountry)
);
