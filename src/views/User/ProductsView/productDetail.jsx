import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { BsCartPlusFill } from "react-icons/bs";

const SolidStar = () => {
  return (
    <svg
      className="h-5 w-5 text-yellow-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

const OutlineStar = () => {
  return (
    <svg
      className="h-5 w-5 text-gray-200"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

const Rating = ({ rating = 4 }) => {
  return (
    <div className="-ml-0.5 flex">
      {[...Array(5).keys()].map((i) => {
        return i + 1 <= rating ? <SolidStar /> : <OutlineStar />;
      })}
    </div>
  );
};

const ThumbImg = () => {
  return (
    <div className="-ml-0.5 flex">
      {product.thumball.map(() => {
        return (
          <img
            alt={product.title}
            src={product.thumball.index}
            className="aspect-square w-full rounded-xl object-cover"
          />
        );
      })}
    </div>
  );
};

const ProductDetail = ({id, addToCart}) => {
  const { productId } = useParams(id);
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${productId}`)
      .then((res) => setProduct(res.data.product))
      .catch((error) => console.log(error));
  }, [productId]);

  // const [cart, setCart] = useState([]);
  // cartList = cart;
  // localStorage.setItem("cartList", JSON.stringify(cartList));

  // console.log(cartList)
  // const addToCart = (data) => {
  //   setCart([...cart, data]);

  // };

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-8 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="Les Paul"
              src={product.thumbnail}
              className="aspect-square w-full shadow-md rounded-xl object-cover"
            />
            <div className="grid grid-cols-4 gap-4 lg:mt-4">
              {/* {imgAll.map((data) => (
                <img
                  alt=""
                  src={data}
                  className="aspect-square w-full shadow-md rounded-xl object-cover"
                />
              ))} */}
            </div>
          </div>
          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              Pre Order
            </strong>
            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch]">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <p className="mt-0.5 text-sm">{product.supplier}</p>
                <div className="mt-2 ">
                  {/* <Rating rating={product.rating} /> */}
                </div>
              </div>
              <p className="text-lg font-bold">${product.price}</p>
            </div>
            <details className="group relative mt-4">
              <summary className="block">
                <div>
                  <div className="prose max-w-none group-open:hidden">
                    <p>{product.description}</p>
                  </div>
                  <span className="mt-4 cursor-pointer text-sm font-medium underline group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                    Read More
                  </span>
                </div>
              </summary>
              <div className="prose max-w-none pb-6">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  veniam dicta beatae eos ex error culpa delectus rem tenetur,
                  architecto quam nesciunt, dolor veritatis nisi minus
                  inventore, rerum at recusandae?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat nam sapiente nobis ea veritatis error consequatur nisi
                  exercitationem iure laudantium culpa, animi temporibus non!
                  Maxime et quisquam amet. A, deserunt!
                </p>
              </div>
            </details>
            <div className="mt-8">
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Color</legend>
                <div className="flow-root">
                  <div className="-m-0.5 flex flex-wrap">
                    {/* {product.color.map((product)=>{ */}
                    <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        className="peer sr-only"
                      />
                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Texas Tea
                        {/* {product.index} */}
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="mt-8 flex">
                <div className="flex">
                  <label htmlFor="quantity" className="sr-only">
                    Qty
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    // onChange={(e) => setCount(e.target.value)}
                    min={1}
                    defaultValue={1}
                    className="w-20 mx-3 rounded text-lg"
                  />
                </div>
                <button
                  // type="submit"
                  onClick={() => addToCart(product)}
                  className="btn btn_primary text-2xl"
                >
                  <BsCartPlusFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
