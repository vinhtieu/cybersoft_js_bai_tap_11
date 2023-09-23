import React, { Component } from "react";
import ProductGrid from "./productGrid.js";
import ProductOverview from "./productOverview.js";
import Cart from "./cart.js";

export default class Home extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ gap: "8px", width: "100vw", height: "100vh" }}>
        <div className="row h-100">
          <div className="col-5">
            <Cart />
          </div>
          <div className="col-7">
            <div className="d-flex flex-column h-100">
              <ProductGrid />
              <ProductOverview />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
