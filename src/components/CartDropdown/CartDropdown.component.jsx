import { useSelector } from "react-redux";
import { Link } from "wouter";

import "./CartDropdown.styles.scss";

import { CartItem } from "../components.js";

const cartSelector = (state) => state.cart;

const CartDropdown = () => {
  const cart = useSelector(cartSelector);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length ? (
          cart.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <span className="empty-message">Your cart is empty.</span>
        )}
      </div>
      <Link href="/checkout" className="custom-button">
        GO TO CHECKOUT
      </Link>
    </div>
  );
};

export default CartDropdown;
