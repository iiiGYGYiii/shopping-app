import { useDispatch } from "react-redux";

import "./CheckoutItem.styles.scss";

import { removeItemAction } from "../../redux/reducers/cart.reducer";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, qty, id } }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeItemAction(id));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{qty}</span>
      <span className="price">{price}</span>
      <button onClick={handleClick} className="remove-button">
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
