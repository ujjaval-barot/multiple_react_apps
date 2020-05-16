import { combineReducers } from "redux";
import menu from "./menu";

export default (history) =>
  combineReducers({
    menu,
  });
