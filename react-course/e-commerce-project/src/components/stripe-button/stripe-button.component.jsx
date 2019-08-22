// jshint esversion:6
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_gwfD9qzUTCPQuOVVbjAgeCyv00zVips0a4';

  const onToken = token => {
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Crown Ltd.'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;
