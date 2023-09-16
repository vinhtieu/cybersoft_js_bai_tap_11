import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    let {
      id,
      name,
      alias,
      price,
      description,
      shortDescription,
      quantity,
      image,
    } = this.props.product;
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
            src={image}
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
            {name}
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
                this.props.onDecrease(this.props.product);
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
              {quantity}
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
                this.props.onIncrease(this.props.product);
              }}>
              +
            </button>
          </div>
          <div style={{ fontWeight: "500" }}>{price} $</div>
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
                this.props.onDelete(this.props.product);
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
