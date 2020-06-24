import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const pulblishableKey =
    "pk_test_51GxLsGGVgGUQ2Q1wHdnxwqYJxN8bEALWZ1LL4cUzE7uf8IXtqZ3Gn4vJo0AZ1jnFhnqTxxMStSBgJCl43Csm8jWF00esL1cX1p";
    const onToken = token => {
        console.log(token);
        alert('payment successful')
    }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Shop Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pulblishableKey}
    />
  );
};
export default StripeCheckoutButton