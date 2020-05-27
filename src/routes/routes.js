import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import Employee from "../projects/employee/modules/Employee";
import AddEmployee from "../projects/employee/modules/AddEmployee";
import SearchAstroid from "../projects/astroid/modules/SearchAstroid";
import Astroid from "../projects/astroid/modules/Astroid";
import SearchCountry from "../projects/weather/modules/SearchCountry";
import Country from "../projects/weather/modules/Country";
import CapitalCity from "../projects/weather/modules/CapitalCity";
import Cart from "../projects/foodcart/modules/cart";
import Menu from "../projects/foodcart/modules/menu";
import MenuSubItems from "../projects/foodcart/modules/subitems";
import Todo from "../projects/todo/modules/todo";

import Homepage from "../Homepage";

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/foodcart" component={Menu} />
        <Route
          exact
          path="/foodcart/subitems/:itemId"
          component={MenuSubItems}
        />
        <Route exact path="/foodcart/cart" component={Cart} />

        <Route exact path="/employee" component={Employee} />
        <Route exact path="/addemployee" component={AddEmployee} />
        <Route exact path="/astroid" component={SearchAstroid} />
        <Route exact path="/astroid/:id" component={Astroid} />
        <Route exact path="/weather/country" component={SearchCountry} />
        <Route exact path="/weather/country/:name/:code" component={Country} />
        <Route exact path="/weather/capital/:name" component={CapitalCity} />
        <Route exact path="/todo" component={Todo} />
      </HashRouter>
    );
  }
}
