import React from "react";
import { Link } from "react-router-dom";
import { BsSearch, BsCheck } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

const HeaderSearch = () => {
  return (
    <div className="header__search justify-end md:flex">
      <div className="header__search-input-wrap ">
        <input
          type="text"
          className="header__search-input"
          placeholder="Nhập để tìm kiếm sản phẩm"
        />
        {/* Search history */}
        <div className="header__search-history">
          <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
          <ul className="header__search-history-list">
            <li className="header__search-history-item">
              <Link to="#">Kem dưỡng da</Link>
            </li>
            <li className="header__search-history-item">
              <Link to="#">Kem dưỡng trắng da</Link>
            </li>
            <li className="header__search-history-item">
              <Link to="#">Kem tẩy da chết</Link>
            </li>
          </ul> 
        </div>
      </div>
      <button className="header__search-btn">
        <span className="header__search-btn-icon">
          <BsSearch />
        </span>
      </button>
    </div>
  );
};

export default HeaderSearch;
