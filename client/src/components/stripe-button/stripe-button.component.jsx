import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GxLsGGVgGUQ2Q1wHdnxwqYJxN8bEALWZ1LL4cUzE7uf8IXtqZ3Gn4vJo0AZ1jnFhnqTxxMStSBgJCl43Csm8jWF00esL1cX1p";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an error with your payment. Please use the provided card information."
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Shop Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
