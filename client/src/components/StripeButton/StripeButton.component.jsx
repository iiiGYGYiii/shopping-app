import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import "./StripeButton.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JPy55I1v38zyV2N8X96VEUJfZXmRED3BgFADvar8LokXdXA9Tl71a0MPTz2dSnhcsS7MKqoxY52AJVOVJpPXVO100o4bzXUAt";

  const onToken = async (token) => {
    try {
      const msg = await axios.post("payment", {
        amount: priceForStripe,
        token,
      });
      console.log(msg.data);
      alert("Payment was successful.");
    } catch (error) {
      console.log("Payment Error: ", error);
      alert("There was an issue with your payment.");
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shopping App Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
