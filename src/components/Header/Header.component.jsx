import { useState } from "react";
import { Link } from "wouter";
import { useSelector } from "react-redux";
import { auth } from "../../services/firebase.utils";

import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/1444714083.svg";
import { CartIcon, CartDropdown } from "../components";

const userSelector = (state) => state.user.currentUser;

const Header = () => {
  const [show, setShow] = useState(false);
  const handleCartClick = () => setShow((prevState) => !prevState);
  const currentUser = useSelector(userSelector);
  return (
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
          <div className="option" onClick={async () => await auth.signOut()}>
            LOG OUT
          </div>
        ) : (
          <Link to="/sign-in">LOG IN</Link>
        )}
        <CartIcon handleClick={handleCartClick} />
      </div>
      {show && <CartDropdown />}
    </nav>
  );
};

export default Header;
