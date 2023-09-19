import React, { Component } from "react";
import { connect } from "react-redux";
import { DECREASE_AMOUNT, DELETE_PRODUCT, INCREASE_AMOUNT } from "./redux";

class CartItem extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          width: "100%",
          borderRadius: "8px",
          padding: "16px",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          marginBottom: "24px",
          alignItems: "center",
        }}>
        <figure style={{ width: "200px", height: "150px", margin: "0" }}>
          <img
            src={this.props.product.image}
            alt="..."
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </figure>
        <div
          style={{
            alignSelf: "flex-start",
          }}>
          <h5
            style={{
              fontSize: "22px",
              marginBottom: "3rem",
            }}>
            {this.props.product.name}
          </h5>
          <div style={{ marginBottom: "16px" }}>
            <button
              style={{
                width: "30px",
                height: "30px",
                padding: "2px",
                marginTop: "auto",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                backgroundColor: "lightgrey",
                border: "none",
              }}
              onClick={() => {
                this.props.handleDecreaseAmount(this.props.product);
              }}>
              -
            </button>
            <span
              style={{
                display: "inline-block",
                width: "30px",
                height: "30px",
                padding: "2px",
                border: "1px solid black",
                textAlign: "center",
              }}>
              {this.props.product.amount}
            </span>
            <button
              style={{
                width: "30px",
                height: "30px",
                padding: "2px",
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
                backgroundColor: "lightgrey",
                border: "none",
              }}
              onClick={() => {
                this.props.handleIncreaseAmount(this.props.product);
              }}>
              +
            </button>
          </div>
          <div style={{ fontWeight: "500" }}>{this.props.product.price} $</div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "16px",
            cursor: "pointer",
          }}>
          {
            <svg
              className="svg-icon"
              style={{
                cursor: "pointer",
                width: "1em",
                height: "1em",
                verticalAlign: "middle",
                fill: "currentColor",
                overflow: "hidden",
              }}
              onClick={() => {
                this.props.handleDeleteProduct(this.props.product);
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
            </svg>
          }
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteProduct: (payload) => {
      let action = {
        type: DELETE_PRODUCT,
        payload,
      };
      dispatch(action);
    },
    handleIncreaseAmount: (payload) => {
      let action = {
        type: INCREASE_AMOUNT,
        payload,
      };
      dispatch(action);
    },
    handleDecreaseAmount: (payload) => {
      let action = {
        type: DECREASE_AMOUNT,
        payload,
      };
      dispatch(action);
    },
  };
};

export default connect(mapDispatchToProps)(CartItem);
