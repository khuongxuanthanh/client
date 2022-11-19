import React from "react";
import Avarta from "../../../assets/images/Avatar.png";

const Notify = () => {
  return (
    <>
      <header className="header__notify-header">
        <h3>Thông báo mới nhận</h3>
      </header>
      <ul className="header__notify-list">
        <li className="header__notify-item header__notify-item-read">
          <Link to="#" className="header__notify-link">
            <img src={Avarta} alt="" className="header__notify-img" />
            <div className="header__notify-info">
              <span className="header__notify-name">
                Mỹ phẩm Ohui chính hãng
              </span>
              <span className="header__notify-desc">
                Mô tả sản phẩm Ohui chính hãng
              </span>
            </div>
          </Link>
        </li>
        <li className="header__notify-item header__notify-item-read">
          <Link to="#" className="header__notify-link">
            <img src={Avarta} alt="" className="header__notify-img" />
            <div className="header__notify-info">
              <span className="header__notify-name">
                Mỹ phẩm Ohui chính hãng
              </span>
              <span className="header__notify-desc">
                Mô tả sản phẩm Ohui chính hãng
              </span>
            </div>
          </Link>
        </li>
        <li className="header__notify-item header__notify-item-read">
          <Link to="#" className="header__notify-link">
            <img src={Avarta} alt="" className="header__notify-img" />
            <div className="header__notify-info">
              <span className="header__notify-name">
                Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui
                chính hãng
              </span>
              <span className="header__notify-desc">
                Mô tả sản phẩm Ohui chính hãng
              </span>
            </div>
          </Link>
        </li>
      </ul>
      <footer className="header__notify-footer">
        <Link to="#" className="header__notify-footer-bnt">
          Xem tất cả
        </Link>
      </footer>
    </>
  );
};

export default Notify;
