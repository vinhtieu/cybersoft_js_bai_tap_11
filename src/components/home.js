import React, { Component } from "react";
import ProductGrid from "./productGrid.js";
import ProductOverview from "./productOverview.js";
import Cart from "./cart.js";
import database from "./data.js";

export default class home extends Component {
  state = {
    productList: database,
    productOverview: database[0],
    cartItem: [],
  };

  handleSelectingProduct = (product) => {
    this.setState({ productOverview: product });
  };
  handleAddingProduct = (product) => {
    const list = [...this.state.cartItem, product];
    this.setState({ cartItem: list });
  };
  handleDeletingProduct = (product) => {
    let list = [...this.state.cartItem];
    const index = list.indexOf(product);
    list.splice(index, 1);
    this.setState({ cartItem: list });
  };
  handleIncrease = (product) => {
    product.quantity++;
    const list = [...this.state.cartItem];
    this.setState({ cartItem: list });
  };
  handleDecrease = (product) => {
    product.quantity--;
    const list = [...this.state.cartItem];
    this.setState({ cartItem: list });
  };

  render() {
    return (
      <div
        className="container"
        style={{ gap: "8px", width: "100vw", height: "100vh" }}>
        <div className="row h-100">
          <div className="col-5">
            <Cart
              deleteProduct={this.handleDeletingProduct}
              increaseProduct={this.handleIncrease}
              decreaseProduct={this.handleDecrease}
              item={this.state.cartItem}
            />
          </div>
          <div className="col-7">
            <div className="d-flex flex-column h-100">
              <ProductGrid
                selectProduct={this.handleSelectingProduct}
                shoesList={this.state.productList}
              />
              <ProductOverview
                addProduct={this.handleAddingProduct}
                selectedProduct={this.state.productOverview}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
