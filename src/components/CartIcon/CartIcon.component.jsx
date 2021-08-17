import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import "./CartIcon.styles.scss";

import ShoppingIcon from "../../assets/shopping-bag.svg";

const useMemoizedTotalItems = () => {
  const cartItemSelector = (state) => state.cart;
  const totalCartItems = (cart) => cart.reduce((p, { qty }) => p + qty, 0);

  const memoizedCartItemSelector = createSelector(
    [cartItemSelector],
    totalCartItems
  );
  const memoizedCartItems = useSelector(memoizedCartItemSelector);
  return memoizedCartItems;
};

const CartIcon = ({ handleClick }) => {
  const itemsInCart = useMemoizedTotalItems();
  return (
    <div className="cart-icon" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsInCart}</span>
    </div>
  );
};

export default CartIcon;
