import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pagination, Navigation } from "swiper";
import Slider from "react-slick";

// Icons
import { BsHeart, BsCart, BsArrowRight, BsArrowLeft } from "react-icons/bs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="btn btn_primary absolute -top-11 right-0 flex items-center" onClick={onClick}>
      <button className="next text-2xl">
        <BsArrowRight />
      </button>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="btn btn_primary absolute -top-11 right-14 flex items-center" onClick={onClick}>
      <button className="prev text-2xl">
        <BsArrowLeft />
      </button>
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold py-2">Featured Products</h2>
        <Slider {...settings}>
          {products.map((data) => {
            return (
              <div key={data._id} className="px-2 -ml-2 -mr-2">
                <div className="relative block border border-gray-100">
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

                    <Link
                      to={`/products/${data._id}`}
                      type="button"
                      className="mt-4 flex w-full items-center justify-center rounded-sm bg-teal-400 px-8 py-4"
                    >
                      <span className="text-sm font-medium">Add to Cart</span>
                      <BsCart />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default FeaturedProduct;
