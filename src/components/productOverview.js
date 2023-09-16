import React, { Component } from "react";

export default class ProductOverview extends Component {
  render() {
    let {
      id,
      name,
      alias,
      price,
      description,
      Nike,
      shortDescription,
      quantity,
      image,
    } = this.props.selectedProduct;
    return (
      <div
        className="row p-2"
        style={{
          width: "100%",
          height: "50%",
          margin: "20px",
          maxHeight: "50vh",
          borderRadius: "8px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}>
        <figure className="col-5">
          <img
            src={image}
            alt=""
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </figure>
        <div className="col-7 d-flex flex-column justify-content-center align-items-start">
          <h2 style={{ fontSize: "40px", marginBottom: "16px" }}>{name}</h2>
          <p style={{ fontSize: "24px", marginBottom: "32px" }}>{price}$</p>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            {description}
          </p>
          <button
            className="btn btn-primary"
            style={{ marginBottom: "8px", width: "100%", fontSize: "16px" }}>
            Buy now
          </button>
          <button
            className="btn btn-primary"
            style={{
              marginBottom: "16px",
              width: "100%",
              fontSize: "16px",
              color: "black",
              border: "none",
              background: "#ffe001",
            }}
            onClick={() => {
              const product = { ...this.props.selectedProduct, quantity: "1" };
              this.props.addProduct(product);
            }}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
