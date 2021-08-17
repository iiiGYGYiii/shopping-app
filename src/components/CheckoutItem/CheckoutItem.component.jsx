import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ cartItem: { name, imageUrl, price, qty } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{qty}</span>
      <span className="price">{price}</span>
      <button className="remove-button">&#10005;</button>
    </div>
  );
};

export default CheckoutItem;
