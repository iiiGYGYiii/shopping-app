import { useSelector } from "react-redux";

import "./CartIcon.styles.scss";

import ShoppingIcon from "../../assets/shopping-bag.svg";

const totalCartItemsSelector = (state) =>
  state.cart.reduce((p, { qty }) => p + qty, 0);

const CartIcon = ({ handleClick }) => {
  const itemsInCart = useSelector(totalCartItemsSelector);
  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsInCart}</span>
    </div>
  );
};

export default CartIcon;
