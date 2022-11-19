import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiHelpCircle, BiBell } from "react-icons/bi";
import QrCode from "../../../assets/images/qr_code.png";
import AppStor from "../../../assets/images/app_store.png";
import GooglePlay from "../../../assets/images/google_play.png";
import AppGallery from "../../../assets/images/app_gallery.png";
import Avarta from "../../../assets/images/Avatar.png";

// import Notify from "./Notify";

// const Logout = () => {
//   localStorage.removeItem("loginOk");
// }

// kiem tra user login
const item = JSON.parse(localStorage.getItem("loginOk"));
const LoginOk = () => {
  if (item == null) {
    return (
      <li className="flex text-white font-medium pr-2">
        <Link className="pr-2 header__nav-item-link" to="/login">
          Login
        </Link>
        <Link className=" header__nav-item-link" to="/register">
          Register
        </Link>
      </li>
    );
  } else {
    return (
      <li className="header__nav-item header__nav-user">
        <img src={Avarta} alt="" className="header__nav-user-img" />
        <span className="header__nav-user-name">{item.user.name}</span>
        <ul className="header__nav-user-menu">
          <li className="header__nav-user-item">
            <Link to="#" className="">
              My account
            </Link>
          </li>
          <li className="header__nav-user-item">
            <Link to="#" className="">
              My address
            </Link>
          </li>
          <li className="header__nav-user-item">
            <Link to="#" className="">
              My Order
            </Link>
          </li>
          <li className="header__nav-user-item header__nav-user-item-out">
            <Link
              // onClick={Logout()}
              className=""
            >
              LogOut
            </Link>
          </li>
        </ul>
      </li>
    );
  }
};

const HeaderNav = () => {
  return (
    <nav className="header__nav justify-end md:justify-between">
      <ul className="header__nav-list hidden md:block">
        <li className="header__nav-item header__nav-item-separate">
          Seller Centre
        </li>
        <li className="header__nav-item header__nav-item-separate">
          Join as Seller
        </li>
        <li className="header__nav-item header__nav-item-separate header__nav-item--has-qr">
          Download
          <div className="header__qr">
            <img src={QrCode} alt="QR code" className="header__qr-img" />
            <div className="header_qr-apps">
              <Link to="#" className="header__qr-link">
                <img
                  src={AppStor}
                  alt="App store"
                  className="header__qr-download-img"
                />
              </Link>
              <Link to="#" className="header__qr-link">
                <img
                  src={GooglePlay}
                  alt="Google play"
                  className="header__qr-download-img"
                />
              </Link>
              <Link to="#" className="header__qr-link">
                <img
                  src={AppGallery}
                  alt="App gallery"
                  className="header__qr-download-img"
                />
              </Link>
            </div>
          </div>
        </li>
        <li className="header__nav-item">
          <span className="header__nav-title--no-pointer">Follow us on</span>
          <Link to="#" className="header__nav-icon-link">
            <span className=" text-base mr-2">
              <BsFacebook />
            </span>
          </Link>
          <Link to="#" className="header__nav-icon-link">
            <span className=" text-base mr-2">
              <BsInstagram />
            </span>
          </Link>
        </li>
      </ul>
      <ul className="header__nav-list">
        <li className="header__nav-item header__nav-item--has-notify">
          <Link to="#" className="header__nav-item-link">
            <span className="header__nav-icon">
              <BiBell />
            </span>
            Thông báo
          </Link>
          <div className="header__notify">
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
          </div>
        </li>
        <li className="header__nav-item">
          <Link to="#" className="header__nav-item-link">
            <span className="header__nav-icon">
              <BiHelpCircle />
            </span>
            Hỗ trợ
          </Link>
        </li>
        {LoginOk()}
      </ul>
    </nav>
  );
};

export default HeaderNav;
