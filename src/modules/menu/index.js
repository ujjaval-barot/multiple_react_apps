import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as menuActions from "../../actions/menuActions";
import Menu from "./Menu";

export default withRouter(
  connect(
    (state) => ({
      menu: state.menu,
    }),
    (dispatch) => ({
      getMenus: () => {
        dispatch(menuActions.GET_MENU());
      },
    })
  )(Menu)
);
