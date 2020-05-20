import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price } ) => {
    
    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    const priceForStripe = price * 100
    	
    const publishablekey = 'pk_test_cjTqGCwCgH7H6f2eJRaVcr5R00XHFNsn39'
    return (
        <StripeCheckout 
            label = 'Pay Now'
            name = 'TestShop'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is ${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton