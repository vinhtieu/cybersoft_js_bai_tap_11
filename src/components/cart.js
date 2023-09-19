import React, { Component } from "react";
import CartItem from "./cartItem.js";
import { connect } from "react-redux";

class Cart extends Component {
  renderCartItemHTML = (array) => {
    return array.map((product, currIndex) => {
      return <CartItem key={currIndex} product={product} />;
    });
  };

  render() {
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 40px)",
            maxHeight: "100vh",
            borderRadius: "8px",
            background: "white",
            padding: "16px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            marginBlock: "20px",
            overflowX: "auto",
          }}>
          {this.renderCartItemHTML(this.props.number)}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    number: state.cartItems,
  };
};

export default connect(mapStateToProps)(Cart);
