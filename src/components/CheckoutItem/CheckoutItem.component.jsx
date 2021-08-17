import { useDispatch } from "react-redux";

import "./CheckoutItem.styles.scss";

import {
  removeItemAction,
  increaseQtyAction,
  decreaseQtyAction,
} from "../../redux/reducers/cart/cart.reducer";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, qty, id } }) => {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeItemAction(id));
  };
  const handleIncreaseClick = () => {
    dispatch(increaseQtyAction({ name, imageUrl, price, qty, id }));
  };
  const handleDecreaseClick = () => {
    dispatch(decreaseQtyAction({ name, imageUrl, price, qty, id }));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button className="inc-dec-btn" onClick={handleDecreaseClick}>
          &#60;
        </button>
        {qty}
        <button className="inc-dec-btn" onClick={handleIncreaseClick}>
          &#62;
        </button>
      </span>
      <span className="price">{price}</span>
      <button onClick={handleRemoveClick} className="remove-button">
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
