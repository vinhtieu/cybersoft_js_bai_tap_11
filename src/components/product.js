import React, { Component } from "react";

export default class Product extends Component {
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
    } = this.props.shoes;
    return (
      <div
        style={{
          display: "inline-block",
          height: "400px",
          width: "350px",
          padding: "16px",
          borderRadius: "8px",
          background: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          flexShrink: "0",
        }}
        onClick={() => {
          this.props.onSelect(this.props.shoes);
        }}>
        <figure style={{ height: "45%" }}>
          <img
            src={image}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
            alt="..."
          />
        </figure>
        <div>
          <h5>{name}</h5>
          <p>{shortDescription}</p>
          <p style={{ fontWeight: "bold", fontSize: "20px" }}>{price}$</p>
          <a href="#" className="btn btn-primary ms-auto" style={{}}>
            See more
          </a>
        </div>
      </div>
    );
  }
}
