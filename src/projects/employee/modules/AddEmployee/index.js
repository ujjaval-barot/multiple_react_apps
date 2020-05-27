import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_EMPLOYEE } from "../../../../actions/employeeActions";

import AddEmployee from "./AddEmployee";

export default withRouter(
  connect(
    (state) => ({
      employees: state.employee.employees,
    }),
    (dispatch) => ({
      addEmployee: (data) => {
        dispatch(ADD_EMPLOYEE(data));
      },
    })
  )(AddEmployee)
);
