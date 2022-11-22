import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import NoCart from "../../../assets/images/no-cart.png";

const HeaderCart = () => {
  return (
    <div className="header__cart">
      <div className="header__cart-wrap">
        {/* <i className="fas fa-shopping-cart header__cart-icon" /> */}
        <span className="header__cart-icon">
          <FaShoppingCart />
        </span>
        <span className="header__cart-notice">3</span>
        {/* No Cart: header__cart-list-no-cart */}
        <div className="header__cart-list header__cart-list-no-cart">
          <img src={NoCart} alt="" className="header__cart-no-cart-img" />
          <span className="header__cart-list-msg">Chưa có sản phẩm</span>
          <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
          <ul className="header__cart-list-item">
            {/* CSS Cart item */}
            <li className="header__cart-item">
              <img
                src="https://cf.shopee.vn/file/b72901c5240cab13bab0709b185cf9bd_tn"
                alt=""
                className="header__cart-img"
              />
              <div className="header__cart-item-info">
                <div className="header__cart-item-head">
                  <h5 className="header__cart-item-name">
                    Bộ bàn ghế gấp gọn dã ngoại
                  </h5>
                  <div className="header__cart-item-price-wrap">
                    {/* <span className="header__cart-item-price">
                      4.000.000vnđ
                    </span> */}
                    {/* <span className="header__cart-item-multiply">x</span> */}
                    <span className="header__cart-item-qnt">2</span>
                  </div>
                </div>
                <div className="header__cart-item-body">
                  <span className="header__cart-item-description">
                    Phân loại: Bạc
                  </span>
                  <button type="button" className="btn text_primary hover:bg_primary border_primary">
                    {/* Xoa */}
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </li>
          </ul>
          <Link to="/cartList" className="btn text_primary hover:bg_primary border_primary">
            Xem giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;
