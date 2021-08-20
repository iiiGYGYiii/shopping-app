import { useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../services/firebase.utils";

import {
  HeaderContainer,
  OptionLink,
  OptionsContainer,
  LogoContainer,
} from "./Header.styles";

import { ReactComponent as Logo } from "../../assets/1444714083.svg";
import { CartIcon, CartDropdown } from "../components";
import { Link } from "wouter";

const userSelector = (state) => state.user.currentUser;

const Header = () => {
  const [show, setShow] = useState(false);
  const handleCartClick = () => setShow((prevState) => !prevState);
  const currentUser = useSelector(userSelector);
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoContainer>
          <Logo className="logo" />
        </LogoContainer>
      </Link>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={async () => await auth.signOut()}>
            LOG OUT
          </OptionLink>
        ) : (
          <OptionLink to="/sign-in">LOG IN</OptionLink>
        )}
        <CartIcon handleClick={handleCartClick} />
      </OptionsContainer>
      {show && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
