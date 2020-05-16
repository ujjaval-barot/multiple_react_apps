import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  GET_MENU,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LIKE_ITEM,
  UNLIKE_ITEM,
} from "../../actions/menuActions";

import SubItems from "./SubItems";

export default withRouter(
  connect(
    (state) => ({
      menu: state.menu,
    }),
    (dispatch) => ({
      getMenuItems: () => {
        dispatch(GET_MENU());
      },
      addItemToCart: (item) => {
        dispatch(ADD_TO_CART(item));
      },
      removeItemFromCart: (item) => {
        dispatch(REMOVE_FROM_CART(item));
      },
      likeItem: (item) => {
        dispatch(LIKE_ITEM(item));
      },
      unlikeItem: (item) => {
        dispatch(UNLIKE_ITEM(item));
      },
    })
  )(SubItems)
);
