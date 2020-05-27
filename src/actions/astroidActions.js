import Axios from "axios";
import { astroidApiKey } from "../constants";

export const GET_ALL_ASTEROIDS = () => ({
  type: `GET_ALL_ASTEROIDS`,
  payload: new Promise(async (resolve, reject) => {
    try {
      Axios.get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${astroidApiKey}`
      )
        .then((res) => {
          if (res) {
            return resolve(res.data.near_earth_objects);
          }
        })
        .catch((err) => {
          return reject;
        });
    } catch (err) {
      return;
    }
  }),
});

export const GET_ALL_BY_ID = () => ({
  type: `GET_CART_ITEMS`,
});

// export const ADD_TO_CART = (item) => ({
//   type: `ADD_TO_CART`,
//   payload: item,
// });

// export const REMOVE_FROM_CART = (item) => ({
//   type: `REMOVE_FROM_CART`,
//   payload: item,
// });

// export const INCREASE_QUANTITY = (item) => ({
//   type: `INCREASE_QUANTITY`,
//   payload: item,
// });

// export const DECREASE_QUANTITY = (item) => ({
//   type: `DECREASE_QUANTITY`,
//   payload: item,
// });

export const LIKE_ITEM = (item) => ({
  type: `LIKE_ITEM`,
  payload: item,
});
export const UNLIKE_ITEM = (item) => ({
  type: `UNLIKE_ITEM`,
  payload: item,
});
