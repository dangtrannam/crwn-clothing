import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeChckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publicshableKey =
    "pk_test_51JZArgAvntHpS7rjxv3nKOTQCzFCO7Qnx8mbj2mqNY2M5EuBn5vaiaVQPyk4nFX889N2PtA7OzPPAdmhpDU8DCtM00RvUpjEVu";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publicshableKey}
    />
  );
}

export default StripeChckoutButton;
