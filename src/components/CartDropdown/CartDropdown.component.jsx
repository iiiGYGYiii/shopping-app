import { useSelector } from "react-redux";

import "./CartDropdown.styles.scss";

import { CustomButton, CartItem } from "../components.js";

const cartSelector = (state) => state.cart;

const CartDropdown = () => {
  const cart = useSelector(cartSelector);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
