import { useSelector } from "react-redux";

import "./CartIcon.styles.scss";

import ShoppingIcon from "../../assets/shopping-bag.svg";

const lengthCartSelector = (state) =>
  state.cart.map((c) => c.qty).reduce((p, c) => p + c, 0);

const CartIcon = ({ handleClick }) => {
  const itemsInCart = useSelector(lengthCartSelector);
  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsInCart}</span>
    </div>
  );
};

export default CartIcon;
