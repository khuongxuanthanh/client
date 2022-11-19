import React from "react";
import { FaHeart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const card = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-8 sm:grid-cols-6">
      <div className="col-span-2 px-2">
        <Link to="#" className="home-product-item">
          <div
            className="home-product-item__img"
            style={{
              backgroundImage:
                "url(https://cf.shopee.vn/file/bc57f4768172bafcb60a9f4b24026894_tn)",
            }}
          >
            <div className="home-product-item__info">
              <h4 className="home-product-item__name my-2">
                Đồng hồ Nam Rolex cơ, dây da mềm, bảo hành 12 tháng
              </h4>
              <div className="home-product-item__price">
                <span className="home-product-item__price-old">1.200.000đ</span>
                <span className="home-product-item__price-current">
                  999.000đ
                </span>
              </div>
              <div className="home-product-item__action">
                <span className="home-product-item__like home-product-item__like-liked">
                  <span className="home-product-item__like-icon-empty">
                    <FaHeart />
                  </span>
                  <span className="home-product-item__like-icon-fill">
                    <FaHeart />
                  </span>
                </span>
                <div className="home-product-item_star flex">
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className=""><FaStar /></span>
                </div>
                <span className="home-product-item_sold">Đã bán 88</span>
              </div>
              <div className="home-product-item__origin">
                <span className="home-product-item__brand">whoo</span>
                <span className="home-product-item__origin-name">Thụy Sỹ</span>
              </div>
            </div>
            <div className="home-product-item__favourite">
              <i className="fas fa-check" />
              <span>Yêu thích</span>
            </div>
            <div className="home-product-item__sale">
              <span className="home-product-item__sale-percent">43%</span>
              <br />
              <span className="home-product-item__sale-label">GIẢM</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-2 px-2">
        <Link to="#" className="home-product-item">
          <div
            className="home-product-item__img"
            style={{
              backgroundImage:
                "url(https://cf.shopee.vn/file/bc57f4768172bafcb60a9f4b24026894_tn)",
            }}
          >
            <div className="home-product-item__info">
              <h4 className="home-product-item__name my-2">
                Đồng hồ Nam Rolex cơ, dây da mềm, bảo hành 12 tháng
              </h4>
              <div className="home-product-item__price">
                <span className="home-product-item__price-old">1.200.000đ</span>
                <span className="home-product-item__price-current">
                  999.000đ
                </span>
              </div>
              <div className="home-product-item__action">
                <span className="home-product-item__like home-product-item__like-liked">
                  <span className="home-product-item__like-icon-empty">
                    <FaHeart />
                  </span>
                  <span className="home-product-item__like-icon-fill">
                    <FaHeart />
                  </span>
                </span>
                <div className="home-product-item_star flex">
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className=""><FaStar /></span>
                </div>
                <span className="home-product-item_sold">Đã bán 88</span>
              </div>
              <div className="home-product-item__origin">
                <span className="home-product-item__brand">whoo</span>
                <span className="home-product-item__origin-name">Thụy Sỹ</span>
              </div>
            </div>
            <div className="home-product-item__favourite">
              <i className="fas fa-check" />
              <span>Yêu thích</span>
            </div>
            <div className="home-product-item__sale">
              <span className="home-product-item__sale-percent">43%</span>
              <br />
              <span className="home-product-item__sale-label">GIẢM</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-2 px-2">
        <Link to="#" className="home-product-item">
          <div
            className="home-product-item__img"
            style={{
              backgroundImage:
                "url(https://cf.shopee.vn/file/bc57f4768172bafcb60a9f4b24026894_tn)",
            }}
          >
            <div className="home-product-item__info">
              <h4 className="home-product-item__name my-2">
                Đồng hồ Nam Rolex cơ, dây da mềm, bảo hành 12 tháng
              </h4>
              <div className="home-product-item__price">
                <span className="home-product-item__price-old">1.200.000đ</span>
                <span className="home-product-item__price-current">
                  999.000đ
                </span>
              </div>
              <div className="home-product-item__action">
                <span className="home-product-item__like home-product-item__like-liked">
                  <span className="home-product-item__like-icon-empty">
                    <FaHeart />
                  </span>
                  <span className="home-product-item__like-icon-fill">
                    <FaHeart />
                  </span>
                </span>
                <div className="home-product-item_star flex">
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className=""><FaStar /></span>
                </div>
                <span className="home-product-item_sold">Đã bán 88</span>
              </div>
              <div className="home-product-item__origin">
                <span className="home-product-item__brand">whoo</span>
                <span className="home-product-item__origin-name">Thụy Sỹ</span>
              </div>
            </div>
            <div className="home-product-item__favourite">
              <i className="fas fa-check" />
              <span>Yêu thích</span>
            </div>
            <div className="home-product-item__sale">
              <span className="home-product-item__sale-percent">43%</span>
              <br />
              <span className="home-product-item__sale-label">GIẢM</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-2 px-2">
        <Link to="#" className="home-product-item">
          <div
            className="home-product-item__img"
            style={{
              backgroundImage:
                "url(https://cf.shopee.vn/file/bc57f4768172bafcb60a9f4b24026894_tn)",
            }}
          >
            <div className="home-product-item__info">
              <h4 className="home-product-item__name my-2">
                Đồng hồ Nam Rolex cơ, dây da mềm, bảo hành 12 tháng
              </h4>
              <div className="home-product-item__price">
                <span className="home-product-item__price-old">1.200.000đ</span>
                <span className="home-product-item__price-current">
                  999.000đ
                </span>
              </div>
              <div className="home-product-item__action">
                <span className="home-product-item__like home-product-item__like-liked">
                  <span className="home-product-item__like-icon-empty">
                    <FaHeart />
                  </span>
                  <span className="home-product-item__like-icon-fill">
                    <FaHeart />
                  </span>
                </span>
                <div className="home-product-item_star flex">
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className=""><FaStar /></span>
                </div>
                <span className="home-product-item_sold">Đã bán 88</span>
              </div>
              <div className="home-product-item__origin">
                <span className="home-product-item__brand">whoo</span>
                <span className="home-product-item__origin-name">Thụy Sỹ</span>
              </div>
            </div>
            <div className="home-product-item__favourite">
              <i className="fas fa-check" />
              <span>Yêu thích</span>
            </div>
            <div className="home-product-item__sale">
              <span className="home-product-item__sale-percent">43%</span>
              <br />
              <span className="home-product-item__sale-label">GIẢM</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-2 px-2">
        <Link to="#" className="home-product-item">
          <div
            className="home-product-item__img"
            style={{
              backgroundImage:
                "url(https://cf.shopee.vn/file/bc57f4768172bafcb60a9f4b24026894_tn)",
            }}
          >
            <div className="home-product-item__info">
              <h4 className="home-product-item__name my-2">
                Đồng hồ Nam Rolex cơ, dây da mềm, bảo hành 12 tháng
              </h4>
              <div className="home-product-item__price">
                <span className="home-product-item__price-old">1.200.000đ</span>
                <span className="home-product-item__price-current">
                  999.000đ
                </span>
              </div>
              <div className="home-product-item__action">
                <span className="home-product-item__like home-product-item__like-liked">
                  <span className="home-product-item__like-icon-empty">
                    <FaHeart />
                  </span>
                  <span className="home-product-item__like-icon-fill">
                    <FaHeart />
                  </span>
                </span>
                <div className="home-product-item_star flex">
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className=""><FaStar /></span>
                </div>
                <span className="home-product-item_sold">Đã bán 88</span>
              </div>
              <div className="home-product-item__origin">
                <span className="home-product-item__brand">whoo</span>
                <span className="home-product-item__origin-name">Thụy Sỹ</span>
              </div>
            </div>
            <div className="home-product-item__favourite">
              <i className="fas fa-check" />
              <span>Yêu thích</span>
            </div>
            <div className="home-product-item__sale">
              <span className="home-product-item__sale-percent">43%</span>
              <br />
              <span className="home-product-item__sale-label">GIẢM</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-2 px-2">
        <Link to="#" className="home-product-item">
          <div
            className="home-product-item__img"
            style={{
              backgroundImage:
                "url(https://cf.shopee.vn/file/bc57f4768172bafcb60a9f4b24026894_tn)",
            }}
          >
            <div className="home-product-item__info">
              <h4 className="home-product-item__name my-2">
                Đồng hồ Nam Rolex cơ, dây da mềm, bảo hành 12 tháng
              </h4>
              <div className="home-product-item__price">
                <span className="home-product-item__price-old">1.200.000đ</span>
                <span className="home-product-item__price-current">
                  999.000đ
                </span>
              </div>
              <div className="home-product-item__action">
                <span className="home-product-item__like home-product-item__like-liked">
                  <span className="home-product-item__like-icon-empty">
                    <FaHeart />
                  </span>
                  <span className="home-product-item__like-icon-fill">
                    <FaHeart />
                  </span>
                </span>
                <div className="home-product-item_star flex">
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className=""><FaStar /></span>
                </div>
                <span className="home-product-item_sold">Đã bán 88</span>
              </div>
              <div className="home-product-item__origin">
                <span className="home-product-item__brand">whoo</span>
                <span className="home-product-item__origin-name">Thụy Sỹ</span>
              </div>
            </div>
            <div className="home-product-item__favourite">
              <i className="fas fa-check" />
              <span>Yêu thích</span>
            </div>
            <div className="home-product-item__sale">
              <span className="home-product-item__sale-percent">43%</span>
              <br />
              <span className="home-product-item__sale-label">GIẢM</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-2 px-2">
        <Link to="#" className="home-product-item">
          <div
            className="home-product-item__img"
            style={{
              backgroundImage:
                "url(https://cf.shopee.vn/file/bc57f4768172bafcb60a9f4b24026894_tn)",
            }}
          >
            <div className="home-product-item__info">
              <h4 className="home-product-item__name my-2">
                Đồng hồ Nam Rolex cơ, dây da mềm, bảo hành 12 tháng
              </h4>
              <div className="home-product-item__price">
                <span className="home-product-item__price-old">1.200.000đ</span>
                <span className="home-product-item__price-current">
                  999.000đ
                </span>
              </div>
              <div className="home-product-item__action">
                <span className="home-product-item__like home-product-item__like-liked">
                  <span className="home-product-item__like-icon-empty">
                    <FaHeart />
                  </span>
                  <span className="home-product-item__like-icon-fill">
                    <FaHeart />
                  </span>
                </span>
                <div className="home-product-item_star flex">
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className=""><FaStar /></span>
                </div>
                <span className="home-product-item_sold">Đã bán 88</span>
              </div>
              <div className="home-product-item__origin">
                <span className="home-product-item__brand">whoo</span>
                <span className="home-product-item__origin-name">Thụy Sỹ</span>
              </div>
            </div>
            <div className="home-product-item__favourite">
              <i className="fas fa-check" />
              <span>Yêu thích</span>
            </div>
            <div className="home-product-item__sale">
              <span className="home-product-item__sale-percent">43%</span>
              <br />
              <span className="home-product-item__sale-label">GIẢM</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-span-2 px-2">
        <Link to="#" className="home-product-item">
          <div
            className="home-product-item__img"
            style={{
              backgroundImage:
                "url(https://cf.shopee.vn/file/bc57f4768172bafcb60a9f4b24026894_tn)",
            }}
          >
            <div className="home-product-item__info">
              <h4 className="home-product-item__name my-2">
                Đồng hồ Nam Rolex cơ, dây da mềm, bảo hành 12 tháng
              </h4>
              <div className="home-product-item__price">
                <span className="home-product-item__price-old">1.200.000đ</span>
                <span className="home-product-item__price-current">
                  999.000đ
                </span>
              </div>
              <div className="home-product-item__action">
                <span className="home-product-item__like home-product-item__like-liked">
                  <span className="home-product-item__like-icon-empty">
                    <FaHeart />
                  </span>
                  <span className="home-product-item__like-icon-fill">
                    <FaHeart />
                  </span>
                </span>
                <div className="home-product-item_star flex">
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className="home-product-item_star-gold"><FaStar /></span>
                  <span className=""><FaStar /></span>
                </div>
                <span className="home-product-item_sold">Đã bán 88</span>
              </div>
              <div className="home-product-item__origin">
                <span className="home-product-item__brand">whoo</span>
                <span className="home-product-item__origin-name">Thụy Sỹ</span>
              </div>
            </div>
            <div className="home-product-item__favourite">
              <i className="fas fa-check" />
              <span>Yêu thích</span>
            </div>
            <div className="home-product-item__sale">
              <span className="home-product-item__sale-percent">43%</span>
              <br />
              <span className="home-product-item__sale-label">GIẢM</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default card;
