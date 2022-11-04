import { Link } from "react-router-dom";
import logo_img from '../../assets/images/logo.png';

const headerLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/blogs", label: "Blogs" },
  { path: "/add-product", label: "Add product" },
];

const Logo = () => {
  return (
    <Link className="block text-teal-600" to="/">
      <span className="sr-only">Home</span>
      <img className="h-16 w-48" src={logo_img} alt="Logo" />
    </Link>
  );
};

const NavLinks = () => {
  return (
    <nav aria-labelledby="header-navigation">
      <h2 className="sr-only" id="header-navigation">
        Header navigation
      </h2>
      <ul className="flex items-center gap-6 text-sm">
        {headerLinks.map((item) => {
          return (
            <li key={item.path}>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                to={item.path}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const AuthButtons = () => {
  return (
    <>
      <div className="sm:flex sm:gap-4">
        <a
          className="rounded-md border-teal-600 hover:bg-transparent hover:text-teal-600 bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
          href="/login"
        >
          Login
        </a>
        <div className="hidden sm:flex">
          <a
            className="rounded-md hover:bg-teal-600 hover:text-gray-100 bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
            href="/register"
          >
            Register
          </a>
        </div>
      </div>
      <div className="block md:hidden">
        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-12">
            <Logo />
          </div>

          {/* Header Nav Links */}
          <div className="hidden md:block">
            <NavLinks />
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
