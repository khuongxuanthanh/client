import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import QrCode from "../../assets/images/qr_code.png";
import AppStor from "../../assets/images/app_store.png";
import GooglePlay from "../../assets/images/google_play.png";
import AppGallery from "../../assets/images/app_gallery.png";

const Footer = () => {
  return (
    <div className="footer">
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 px-4 md:px-8">
        <div className="col-span-2">
            <h3 className="footer__heading mt-4 mb-2">Chăm sóc khách hàng</h3>
            <ul className="footer-list">
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">Trung tâm trợ giúp</Link>
                </li>
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">F8-Shop Mall</Link>
                </li>
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">Hướng dẫn mua hàng</Link>
                </li>
            </ul>
        </div>
        <div className="col-span-2">
            <h3 className="footer__heading mt-4 mb-2">Giới Thiệu</h3>
            <ul className="footer-list">
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">Giới thiệu</Link>
                </li>
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">Tuyển dụng</Link>
                </li>
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">Điều khoản</Link>
                </li>
            </ul>
        </div>
        <div className="col-span-2">
            <h3 className="footer__heading mt-4 mb-2">Danh Mục</h3>
            <ul className="footer-list">
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">Trang điểm mặt</Link>
                </li>
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">Trang điểm môi</Link>
                </li>
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">Trang điểm mắt</Link>
                </li>
            </ul>
        </div>
        <div className="col-span-2">
            <h3 className="footer__heading mt-4 mb-2">Theo dõi</h3>
            <ul className="footer-list">
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">
                        <BsFacebook />
                        Facebook
                    </Link>
                </li>
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">
                        <BsInstagram />
                        Instagram
                    </Link>
                </li>
                <li className="footer-item">
                    <Link to="#" className="footer-item__link">
                        <BsLinkedin />
                        Linkedin
                    </Link>
                </li>
            </ul>
        </div>
        <div className="col-span-2">
            <h3 className="footer__heading mt-4 mb-2">Vào cửa hàng trên ứng dụng</h3>
            <div className="flex pt-2">
                <img src={QrCode} alt="QR code" className="footer__qr-img" />
                <div className="px-2.5 grid grid-rows-3">
                    <Link to="#" className="header__qr-link">
                        <img src={AppStor} alt="App store" className="h-4" />
                    </Link>
                    <Link to="#" className="header__qr-link">
                        <img src={GooglePlay} alt="Google play" className="h-4" />
                    </Link>
                    <Link to="#" className="header__qr-link">
                        <img src={AppGallery} alt="App gallery" className="h-4" />
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div className="footer__bottom">
        <div className="grid">
            <p className="footer__text">© 2022 - Bản quyền thuộc về Công ty TNHH Shopee</p>
        </div>
    </div>
</div>

  )
}

export default Footer