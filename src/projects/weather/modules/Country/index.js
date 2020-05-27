import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Country from "./Country";

export default withRouter(
  connect(
    (state) => ({
      countries: state.country.countries,
    }),
    (dispatch) => ({})
  )(Country)
);
