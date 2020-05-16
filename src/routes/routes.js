import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

// import components
import Cart from "../modules/cart";
import Menu from "../modules/menu";
import MenuSubItems from "../modules/subitems";

export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Menu} />
        <Route exact path="/subitems/:itemId" component={MenuSubItems} />
        <Route exact path="/cart" component={Cart} />
      </HashRouter>
    );
  }
}
