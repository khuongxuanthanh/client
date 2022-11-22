import React, { useState } from "react";
import ProductDetail from "../ProductsView/productDetail";

function cart() {
  const [carts, setCart] = useState([]);
  const addToCart = (data) => {
    setCart([...carts, data])
  }
  <ProductDetail addToCart={addToCart}/>
  return (
    <div>
      {cart.map((cart, index) => {
        return (
          <div>
            <img src={cart.thumbnail} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default cart;
