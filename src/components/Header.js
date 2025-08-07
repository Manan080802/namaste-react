import { Logo_URL } from "../../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
