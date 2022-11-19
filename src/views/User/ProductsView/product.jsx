import React from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const product = () => {
  return (
    <div className="pt-10 grid grid-cols-12 relative">
      <nav aria-label="Breadcrumb" className="flex absolute">
        <ol
          role="list"
          className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600"
        >
          <li className="flex items-center">
            <Link
              to="/"
              className="flex h-10 items-center bg-gray-100 px-4 transition hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ml-1.5 text-base font-medium"> Home </span>
            </Link>
          </li>
          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -left-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]" />
            <p className="flex h-10 items-center bg-white pl-8 pr-4 text-base font-medium transition hover:text-gray-900">
              Products
            </p>
          </li>
        </ol>
      </nav>

      <div className="col-span-2 hidden lg:block">
        <nav className="category">
          <h3 className="category__heading">Danh mục</h3>
          <ul className="category-list">
            <li className="category-item category-item-active">
              <Link to="#" className="category-item__link">
                Trang điểm mặt
              </Link>
            </li>
            <li className="category-item">
              <Link to="#" className="category-item__link">
                Trang điểm môi
              </Link>
            </li>
            <li className="category-item">
              <Link to="#" className="category-item__link">
                Trang điểm mắt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-span-12 lg:col-span-10">
        <div className="home-filter grid grid-cols-12">
          <span className="col-span-12 py-1">Sắp xếp theo</span>
          <div className="flex col-span-10">
            <button className="home-filter__btn btn">Phổ biến</button>
            <button className="home-filter__btn btn">Mới nhất</button>
            <button className="home-filter__btn btn">Bán chạy</button>
            <div className="select-input">
              <span className="select-input__label">Giá</span>
              <i className="fas fa-angle-down select-input__icon" />
              List option
              <ul className="select-input__list">
                <li className="select-input__item">
                  <Link to="#" className="select-input__link">
                    Giá: Thấp đến cao
                  </Link>
                </li>
                <li className="select-input__item">
                  <Link to="#" className="select-input__link">
                    Giá: Cao đến thấp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-end col-span-12 sm:col-span-2">
            <span className="home-filter__page-num">
              <span className="home-filter__page-current">1</span>/16
            </span>
            <div className="home-filter__page-control">
              <Link to="#" className="home-filter__page-btn">
                <span className="home-filter__page-icon">
                  <AiOutlineLeft />
                </span>
              </Link>
              <Link to="#" className="home-filter__page-btn">
                <span className="home-filter__page-icon">
                  <AiOutlineRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-3 px-3">
          <Card />
        </div>
        <ul className="pagination home-product__pagination">
          <li className="pagination-item">
            <Link to="#" className="pagination-item__link">
              <i className="pagination-item__icon fas fa-angle-left" />
            </Link>
          </li>
          <li className="pagination-item pagination-item-active">
            <Link to="#" className="pagination-item__link">
              1
            </Link>
          </li>
          <li className="pagination-item">
            <Link to="#" className="pagination-item__link">
              2
            </Link>
          </li>
          <li className="pagination-item">
            <Link to="#" className="pagination-item__link">
              3
            </Link>
          </li>
          <li className="pagination-item">
            <Link to="#" className="pagination-item__link">
              4
            </Link>
          </li>
          <li className="pagination-item">
            <Link to="#" className="pagination-item__link">
              5
            </Link>
          </li>
          <li className="pagination-item">
            <Link to="#" className="pagination-item__link">
              <i className="pagination-item__icon fas fa-angle-right" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default product;
