import { useSelector } from "react-redux";

import "./Checkout.styles.scss";

import { CheckoutItem, StripeButton } from "../../components/components";

const totalSelector = (state) =>
  state.cart.reduce((p, c) => p + c.qty * c.price, 0);

const cartSelector = (state) => state.cart;

const CheckoutPage = () => {
  const total = useSelector(totalSelector);
  const cart = useSelector(cartSelector);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cart.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ${total}</div>
      <div className="test-warning">
        <p>*Please make use of the following test credit card for payments*</p>
        <p>4242 4242 4242 4242 - Exp: 01/24 - CVV: 123</p>
      </div>
      <StripeButton price={total} />
    </div>
  );
};

export default CheckoutPage;
