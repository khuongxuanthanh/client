import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";

const products = () => {
  return (
    <div>products</div>
  )
}

export default products

const ApiProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
  axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
      setProducts(res.data.products);
      })
      .catch((error) => console.log(error));
  }, []);

  return products;
};

export  {
  ApiProduct,
};