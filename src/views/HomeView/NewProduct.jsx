import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductList = ({products})=>{
    return (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
            {products.map((data) => {
            return (
                <Link key={data._id} to={`/products/${data._id}`} className="block">
                <div className="flex justify-center">
                    <strong className="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
                    New
                    </strong>
                </div>
                <img
                    alt="Trainer"
                    src={data.thumbnail}
                    className="-mt-3 h-96 w-full object-cover"
                />
                <h3 className="mt-4 text-sm text-black/90">
                    {data.title}
                </h3>
                <div className="mt-4 flex items-center justify-between font-bold">
                    <p className="text-lg">${data.price}</p>
                    <p className="text-xs uppercase tracking-wide">3 Colors</p>
                </div>
                </Link>
                );
            })}
        </div>
    );
};

const NewProduct = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <span className="inline-block h-1 w-12 bg-red-700" />
            <h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
              Trainers
            </h2>
          </div>
          <ProductList products={products} />
        </div>
      </section>
    </>
  );
};

export default NewProduct;
