import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Employee from "./Employee";

export default withRouter(
  connect(
    (state) => ({
      employees: state.employee.employees,
    }),
    (dispatch) => ({})
  )(Employee)
);
