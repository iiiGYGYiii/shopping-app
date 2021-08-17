import "./CartItem.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, qty } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {qty} x {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
