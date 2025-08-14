import { useState, useContext } from "react";
import { Logo_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  let { loggedUser } = useContext(UserContext);
  const cartList = useSelector((state) => state.cart.items);
  const isOnline = useOnlineStatus();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu state

  let checkLogin = (btn) => {
    if (btn.toLowerCase() === "login") setBtnName("Logout");
    else setBtnName("Login");
  };

  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/" className="block text-teal-600 dark:text-teal-300">
              <img src={Logo_URL} alt="Logo" className="h-12" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>{isOnline ? "🟢" : "🔴"}</li>
                <li>
                  <Link className="text-white hover:text-gray-300" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-gray-300" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white hover:text-gray-300"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white hover:text-gray-300"
                    to="/grocery"
                  >
                    Grocery
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-gray-300" to="/cart">
                    Cart{" "}
                    {cartList.length > 0
                      ? "( " +
                        cartList.reduce(
                          (total, item) => total + (item.qty || 0),
                          0
                        ) +
                        " items )"
                      : ""}
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                className={
                  btnName.toLowerCase() === "login"
                    ? "rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                    : "rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white"
                }
                onClick={() => checkLogin(btnName)}
              >
                {btnName}
              </button>

              {/* Mobile Menu Button */}
              <div className="block md:hidden">
                <button
                  className="rounded-sm bg-gray-100 p-2 text-gray-600 dark:bg-gray-800 dark:text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <span className="text-white font-bold">
                {btnName.toLowerCase() == "logout" ? loggedUser : ""}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <ul className="space-y-2">
              <li>{isOnline ? "🟢" : "🔴"}</li>
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/grocery"
                  className="text-white hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Grocery
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-gray-300"
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
