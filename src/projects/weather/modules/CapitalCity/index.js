import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CapitalCity from "./CapitalCity";

export default withRouter(
  connect(
    (state) => ({
      country: state.country,
    }),
    (dispatch) => ({})
  )(CapitalCity)
);
