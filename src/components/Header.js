import { useState } from "react";
import { Logo_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();

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
          <li>{isOnline ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
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
