import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import {
  BsFacebook, BsDribbble, BsGithub,
  BsTwitter, BsInstagram
} from "react-icons/bs";

// Nav Links
const NavLinks = () => {
  return (
    <ul className="space-y-2 gap-6 md:gap-8 lg:gap-12">
      {footerLinks.map((item) => {
        return (
          <li key={item.path}>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
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

//
const ServiceLinks = () => {
  return (
    <ul className="space-y-2 gap-6 md:gap-8 lg:gap-12">
      {serviceLinks.map((item) => {
        return (
          <li key={item.path}>
            <Link
              className="text-gray-700 transition hover:text-gray-700/75"
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

const MediaLinks = () => {
  return (
    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      {footerMediaList.map((item) => {
        return (
          <li key={item.path}>
            <Link
              to={item.path}
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">{item.label}</span>
              {item.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const HelpfulLinks = () => {
  return (
    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      {helpfulLinks.map((item) => {
        return (
          <li key={item.path}>
            <Link
              to={item.path}
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">{item.label}</span>
              {item.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

const LegalLink = () => {
  return (
    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
      {Legal.map((item) => {
        return (
          <li key={item.path}>
            <Link
              to={item.path}
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">{item.label}</span>
              {item.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

// Footer links data
const footerLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/blogs", label: "Blogs" },
];

// Footer links data
const serviceLinks = [
  { path: "/1on1-coaching", label: "1on1 Coaching" },
  { path: "/ompany-review", label: "Company Review" },
  { path: "/accounts-review", label: "Accounts Review" },
  { path: "/HR-consulting", label: "HR Consulting" },
  { path: "/SEO-optimisation", label: "SEO Optimisation" },
];

// Footer links data
const helpfulLinks = [
  { path: "/contact", label: "Contact" },
  { path: "/faqs", label: "FAQs" },
  { path: "/live-chat", label: "Live Chat" }
];

// Legal links pages
const Legal = [
  { path: "/privacy-policy", label: "Privacy Policy" },
  { path: "/terms-conditions", label: "Terms Conditions" },
  { path: "/returns-policy", label: "Returns Policy" },
  { path: "/accessibility", label: "Accessibility" },
];

const footerMediaList = [
  { path: "/facebook", icon: <BsFacebook />, label: "Facebook" },
  { path: "/instagram", icon: <BsInstagram />, label: "Instagram" },
  { path: "/twitter", icon: <BsTwitter />, label: "Twitter" },
  { path: "/github", icon: <BsGithub />, label: "Github" },
  { path: "/dribbble", icon: <BsDribbble />, label: "Dribbble" }
];

// Main Footer
const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link to="/">
              <img className="block h-20 w-64" src={Logo} alt="Logo" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              accusantium.
            </p>
            <div className="mt-8 flex gap-6 text-gray-500">
              {/* Footer Media */}
              <MediaLinks />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav
                aria-label="Footer Nav"
                className="mt-4 space-y-2 text-sm text-gray-500"
              >
                <NavLinks />
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <ServiceLinks />
              </nav>
            </div>
            <div>
              <p className="font-medium">Helpful Links</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <HelpfulLinks />
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-500">
                <LegalLink />
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500">© 2022 Company Name</p>
      </div>
    </footer>
  );
};

export default Footer;
