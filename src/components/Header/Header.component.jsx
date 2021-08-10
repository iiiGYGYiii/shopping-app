import { Link } from "wouter";

import "./Header.styles.scss";
import Logo from "../../assets/1444714083.svg";

const Header = () => (
  <nav className="header">
    <Link to="/">
      <a className="logo-container">
        <Logo className="logo" />
      </a>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
    </div>
  </nav>
);

export default Header;
