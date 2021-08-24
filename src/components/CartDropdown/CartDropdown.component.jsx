import { useSelector } from "react-redux";
import { Link } from "wouter";

import {
  CartDropdownContainer,
  CartItemsContainer,
  CustomMessage,
} from "./CartDropdown.styles";

import { CartItem } from "../components.js";

const cartSelector = (state) => state.cart;

const CartDropdown = () => {
  const cart = useSelector(cartSelector);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cart.length ? (
          cart.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <CustomMessage>Your cart is empty.</CustomMessage>
        )}
      </CartItemsContainer>
      <Link href="/checkout" className="custom-button">
        GO TO CHECKOUT
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
