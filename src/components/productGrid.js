import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./product.js";
class ProductGrid extends Component {
  renderProductGridHTML = (array) => {
    return array.map((product) => {
      return <Product key={product.id} shoes={product} />;
    });
  };

  render() {
    return (
      <div
        className="d-flex  flex-nowrap align-items-center overflow-x-auto h-50 w-100 bg-light"
        style={{
          gap: "16px",
          maxHeight: "50vh",
          margin: "20px",
          padding: "16px",
          borderRadius: "8px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}>
        {this.renderProductGridHTML(this.props.productList)}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    productList: state.productList,
  };
};

export default connect(mapStateToProps)(ProductGrid);
