import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  GET_CART_ITEMS,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../../actions/menuActions";
// import {} from "../../actions/menuActions";

import Cart from "./Cart";

export default withRouter(
  connect(
    (state) => ({
      menu: state.menu,
      cart: state.cart,
    }),
    (dispatch) => ({
      getCartItems: () => {
        dispatch(GET_CART_ITEMS);
      },
      addItemToCart: (item) => {
        dispatch(ADD_TO_CART(item));
      },
      removeItemFromCart: (item) => {
        dispatch(REMOVE_FROM_CART(item));
      },
      increaseQuantity: (item) => {
        dispatch(INCREASE_QUANTITY(item));
      },
      decreaseQuantity: (item) => {
        dispatch(DECREASE_QUANTITY(item));
      },
    })
  )(Cart)
);
