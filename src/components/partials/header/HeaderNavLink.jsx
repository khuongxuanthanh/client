import React from 'react'
import { Link } from 'react-router-dom';

// Footer links data
const headerLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/blogs", label: "Blogs" },
];

// Nav Links
const HeaderLinks = () => {
  return (
    <ul className="space-y-2 gap-6 md:gap-8 lg:gap-12 flex mx-2">
      {headerLinks.map((item) => {
        return (
          <li className='mt-0' key={item.path}>
            <Link
              className="transition hover:text-white/70 text-white leading-normal"
              to={item.path}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const HeaderNavLink = () => {
  return (
    <>
      <div className="flex justify-center">
        <HeaderLinks />
      </div>
    </>
  )
}

export default HeaderNavLink