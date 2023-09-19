import React, { Component } from "react";
import { connect } from "react-redux";
import ProductGrid from "./productGrid.js";
import ProductOverview from "./productOverview.js";
import Cart from "./cart.js";

export default class Home extends Component {
  // handleSelectingProduct = (product) => {
  //   this.setState({ productOverview: product });
  // };

  // handleAddingProduct = (product) => {
  //   let list = [...this.state.cartItems];
  //   const index = list.findIndex((item) => item.id === product.id);
  //   if (index === -1) {
  //     let newShoes = { ...product, soLuong: "1" };
  //     list.push(newShoes);
  //   } else {
  //     list[index].soLuong++;
  //   }
  //   this.setState({ cartItems: list });
  // };

  // handleDeletingProduct = (product) => {
  //   let list = [...this.state.cartItems];
  //   const index = list.indexOf(product);
  //   list.splice(index, 1);
  //   this.setState({ cartItems: list });
  // };

  // handleIncrease = (product) => {
  //   product.soLuong++;
  //   const list = [...this.state.cartItems];
  //   this.setState({ cartItems: list });
  // };

  // handleDecrease = (product) => {
  //   product.soLuong--;
  //   const list = [...this.state.cartItems];
  //   this.setState({ cartItems: list });
  // };

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
