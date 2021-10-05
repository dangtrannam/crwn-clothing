import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

function StripeChckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publicshableKey =
    "pk_test_51JZArgAvntHpS7rjxv3nKOTQCzFCO7Qnx8mbj2mqNY2M5EuBn5vaiaVQPyk4nFX889N2PtA7OzPPAdmhpDU8DCtM00RvUpjEVu";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment!"
        );
      });
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
