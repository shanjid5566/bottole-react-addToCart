import React, { useEffect, useState } from "react";
import Bottol from "../bottol/Bottol";
import "./Bottols.css";
import {
  addToLs,
  getStoredCard,
  removeFromLs,
} from "../../utilites/localStorage";
import Card from "../Card/Card";

const Bottols = () => {
  const [bottols, setBottols] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("../../../public/api/bottol.json")
      .then((res) => res.json())
      .then((data) => setBottols(data));
  }, []);
  useEffect(() => {
    if (bottols.length) {
      const storeCart = getStoredCard();
      const savedCart = [];
      for (const id of storeCart) {
        const bottle = bottols.find((bottle) => (bottle.id = id));
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottols]);

  const handleAddToCart = (bottol) => {
    const newCart = [...cart, bottol];
    setCart(newCart);
    addToLs(bottol.id);
  };
  const hanndleRemoveFromCart = (id) => {
    const remaingCart = cart.fileter((bottom) => bottom.id !== id);
    setCart(remaingCart);
    removeFromLs(id);
  };
  return (
    <div>
      <h2>Bottol Details</h2>
      <Card cart={cart} hanndleRemoveFromCart={hanndleRemoveFromCart}></Card>
      <div className="bottols">
        {bottols.map((bottol) => (
          <Bottol
            key={bottol.id}
            bottol={bottol}
            handleAddToCart={handleAddToCart}
          ></Bottol>
        ))}
      </div>
    </div>
  );
};

export default Bottols;
