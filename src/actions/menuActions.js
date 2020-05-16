export const GET_MENU = () => ({
  type: `GET_MENU`,
});

export const GET_CART_ITEMS = () => ({
  type: `GET_CART_ITEMS`,
});

export const ADD_TO_CART = (item) => ({
  type: `ADD_TO_CART`,
  payload: item,
});

export const REMOVE_FROM_CART = (item) => ({
  type: `REMOVE_FROM_CART`,
  payload: item,
});

export const INCREASE_QUANTITY = (item) => ({
  type: `INCREASE_QUANTITY`,
  payload: item,
});

export const DECREASE_QUANTITY = (item) => ({
  type: `DECREASE_QUANTITY`,
  payload: item,
});

export const LIKE_ITEM = (item) => ({
  type: `LIKE_ITEM`,
  payload: item,
});
export const UNLIKE_ITEM = (item) => ({
  type: `UNLIKE_ITEM`,
  payload: item,
});
