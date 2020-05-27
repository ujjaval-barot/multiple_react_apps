import { combineReducers } from "redux";
import employee from "./employee";
import astroid from "./astroid";
import country from "./country";
import menu from "./menu";
import todo from "./todo";

export default (history) =>
  combineReducers({
    employee,
    astroid,
    country,
    menu,
    todo,
  });
