import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Icons
import { BsHeart, BsCart } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Featured Products</h2>
        <div className="mt-4">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={4}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {products.map((data) => {
              return (
                <SwiperSlide key={data._id}>
                  <Link
                    to={`/products/${data._id}`}
                    className="relative block border border-gray-100"
                  >
                    <button
                      type="button"
                      className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                    >
                      <span className="sr-only">Wishlist</span>
                      <BsHeart />
                    </button>

                    <img
                      alt="Toy"
                      src={data.thumbnail}
                      className="h-56 w-full object-contain lg:h-72"
                    />

                    <div className="p-6">
                      <span className="inline-block bg-teal-400 px-3 py-1 text-xs font-medium">
                        New
                      </span>

                      <h3 className="mt-4 text-lg font-bold">{data.title}</h3>

                      <p className="mt-2 text-sm font-medium text-gray-600">
                        ${data.price}
                      </p>

                      <button
                        type="button"
                        className="mt-4 flex w-full items-center justify-center rounded-sm bg-teal-400 px-8 py-4"
                      >
                        <span className="text-sm font-medium">
                          Add to Cart
                        </span>
                        <BsCart />
                      </button>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
