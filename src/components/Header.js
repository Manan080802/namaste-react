import { useState } from "react";
import { Logo_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  let checkLogin = (btn) => {
    if (btn.toLowerCase() == "login") setBtnName("logout");
    else setBtnName("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className={btnName.toLowerCase() == "login" ? "login" : "logout"}
            onClick={() => checkLogin(btnName)}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
