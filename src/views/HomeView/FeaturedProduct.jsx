import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../../assets/js/main';

const FeaturedView = ({ products }) => {
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
            {products.map((data) => {
            return (
              <Link 
                key={data._id} 
                to={`/products/${data._id}`} 
                className="relative block border border-gray-100">
                <button
                  type="button"
                  className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                >
                  <span className="sr-only">Wishlist</span>
                  <BsHeart />
                </button>

                <img alt="Toy" src={data.thumbnail}
                  className="h-56 w-full object-contain lg:h-72"
                />

                <div className="p-6">
                  <span className="inline-block bg-teal-400 px-3 py-1 text-xs font-medium">
                    New
                  </span>

                  <h3 className="mt-4 text-lg font-bold">{data.title}</h3>

                  <p className="mt-2 text-sm font-medium text-gray-600">${data.price}</p>

                  <button
                    type="button"
                    className="mt-4 flex w-full items-center justify-center rounded-sm bg-teal-500 px-8 py-4"
                  >
                    <span className="text-sm font-medium"> Add to Cart - </span>
                    <BsCart />
                  </button>
                </div>
              </Link>
              );
            })}
        </div>
        <div className="swiper-pagination !relative !bottom-0 mx-auto mt-8 max-w-3xl" />
        </div>
    </div>
  );
};

const FeaturedProduct = () => {
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
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="mt-4">
          {/* Featured products */}
          <FeaturedView products={(products)} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
