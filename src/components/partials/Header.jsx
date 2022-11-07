import { Link } from "react-router-dom";
import logo_img from "../../assets/images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect } from "react";

const headerLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/blogs", label: "Blogs" },
  { path: "/add-product", label: "Add product" },
];

// const[user, serUser] = useState('');
// const Login = () => {
//   return(
//     <div className="sm:flex sm:gap-4">
//       {user? (
//         <div className="sm:flex sm:gap-4">
//           <div className="hidden sm:flex">Hello: {user}</div>
//           <button onClick={Logout}>Logout</button>
//         </div>
//       ) : (
//         <div className="sm:flex sm:gap-4">
//          <Link
//           className="rounded-md border-teal-500 hover:bg-transparent hover:text-teal-500 bg-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow"
//           to="/login"
//         >
//           Login
//         </Link>
//         <div className="hidden sm:flex">
//           <Link
//             className="rounded-md hover:bg-teal-500 hover:text-gray-100 bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
//             to="/register"
//           >
//             Register
//           </Link>
//         </div>
//       </div>
//       )}
//     </div>
//   );
// };

const Logo = () => {
  return (
    <Link className="block text-teal-500" to="/">
      <span className="sr-only">Home</span>
      <img className="h-16 w-48" src={logo_img} alt="Logo" />
    </Link>
  );
};

const NavLogin = () => {
  return (
    <div className="sm:flex sm:gap-4">
      <Link
        className="rounded-md border-teal-500 hover:bg-transparent hover:text-teal-500 bg-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow"
        to="/login"
      >
        Login
      </Link>
      <div className="hidden sm:flex">
        <Link
          className="rounded-md hover:bg-teal-500 hover:text-gray-100 bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
          to="/register"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

const Logout = () => {
  localStorage.removeItem("result");
  // navigate("/");
};

const result = JSON.parse(localStorage.getItem("result"));
const Login = () => {
  if (result === null) return <NavLogin />;
  else if (result.success)
    return (
      <div className="sm:flex sm:gap-4">
        <div className="hidden sm:flex">Hello: {result.user.name}</div>
        <button
          className="rounded-md border-teal-500 hover:bg-transparent hover:text-teal-500 bg-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow"
          onClick={Logout}
        >
          Logout
        </button>
      </div>
    );
  else return <NavLogin />;
};

const NavLinks = () => {
  return (
    <nav aria-labelledby="header-navigation">
      <h2 className="sr-only" id="header-navigation">
        Header navigation
      </h2>
      <ul className="flex items-center gap-6 text-sm">
        {headerLinks.map((item, index) => {
          return (
            <li key={index}>
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
      <Login />
      <div className="block md:hidden">
        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
          <AiOutlineMenu />
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
