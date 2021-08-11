import { Link } from "wouter";

import "./Header.styles.scss";
import Logo from "../../assets/1444714083.svg";

import { auth } from "../../services/firebase.utils";

const Header = ({ currentUser }) => (
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
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          LOG OUT
        </div>
      ) : (
        <Link to="/sign-in">LOG IN</Link>
      )}
    </div>
  </nav>
);

export default Header;
