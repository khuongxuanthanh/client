import { useEffect, useState } from "react";
import ProductCollection from "./ProductCollection";
import axios from "axios";

const categories = ["Featured", "Sofas", "Chairs"];

const ProductCollectionList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
  axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
      setProducts(res.data.products);
      })
      .catch((error) => console.log(error));
  }, []);
 
  return (
    <>
      {categories.map((category) => {
        const productsByCategory = products.filter(
          (product) => product.category === category
        );

        return (
          <ProductCollection
            key={category}
            category={category}
            products={productsByCategory}
          />
        );
      })}
    </>
  );
};

export default ProductCollectionList;