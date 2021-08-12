import "./CartIcon.styles.scss";

import ShoppingIcon from "../../assets/shopping-bag.svg";

const CartIcon = ({ handleClick }) => {
  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
