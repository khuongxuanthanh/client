import React from "react";
import HeaderSearch from "./header/HeaderSearch";
import HeaderLogo from "./header/HeaderLogo";
import HeaderCart from "./header/HeaderCart";
import HeaderNav from "./header/HeaderNav";
import HeaderNavLink from "./header/HeaderNavLink";

const Header = () => {
  return (
    <>
      <header className="header relative">
        <div className="grid">
          <HeaderNav />
          <div>
            {/* Header with search */}
            <div className="header__with-search justify-between">
              <HeaderLogo />
              <HeaderSearch />
              <HeaderCart />
            </div>
            <div className="">
              <HeaderNavLink />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
