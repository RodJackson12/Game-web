import React from "react";

const Product = (props) => (
    <div>
      <img src={props.image.url} alt={props.image.alt} />
      <h1>{props.title}</h1>
      <p>{props.price} </p>
      <p>{props.description}</p>
    </div>
)


export default Product;