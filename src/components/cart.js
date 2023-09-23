import React, { Component, useEffect } from "react";
import CartItem from "./cartItem.js";
import { connect } from "react-redux";
import { CALC_TOTAL } from "./redux";

class Cart extends Component {
  componentDidUpdate() {
    this.props.handleCalculateTotal();
  }

  renderCartItemHTML = (array) => {
    return array.map((item, currIndex) => {
      return <CartItem key={currIndex} product={item} />;
    });
  };

  render() {
    return (
      <div
        style={{
          height: "calc(100% - 40px)",
          marginBlock: "20px",
          display: "flex",
          flexDirection: "column",
          alignContent: "space-between",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
        <div
          style={{
            width: "100%",
            maxHeight: "80vh",
            background: "white",
            padding: "16px",
            overflowX: "auto",
          }}>
          {this.renderCartItemHTML(this.props.cartItems)}
        </div>

        <div
          style={{
            width: "100%",
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
          }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "4px 16px",
              justifyContent: "space-between",
            }}>
            <span>Subtotal</span>
            <span>{this.props.subTotal}$</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "4px 16px 8px",
              justifyContent: "space-between",
            }}>
            <span>Tax</span>
            <span>{this.props.tax}$</span>
          </div>
          <div
            style={{
              width: "100%",
              padding: "16px",
              fontSize: "24px",
              fontWeight: "bold",
              background: "#f8f9fa",
              position: "relative",
              zIndex: "10",
              display: "flex",
              justifyContent: "space-between",
            }}>
            <span>Total</span>
            <span>{this.props.total}$</span>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
    subTotal: state.subTotal,
    tax: state.tax,
    total: state.total,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleCalculateTotal: () => {
      let action = {
        type: CALC_TOTAL,
        payload: "",
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
