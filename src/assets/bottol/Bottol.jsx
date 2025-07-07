import React from "react";
import "./Bottol.css";

const Bottol = ({ bottol, handleAddToCart }) => {
  const { name, price, img } = bottol;
  return (
    <div className="bottol">
      <h2>Name : {name}</h2>
      <p>Price : {price}</p>
      <img src={img}></img>
      <button style={{ marginTop: "10px" }} onClick={() => handleAddToCart(bottol)}>
        ADD TO CART
      </button>
    </div>
  );
};

export default Bottol;
