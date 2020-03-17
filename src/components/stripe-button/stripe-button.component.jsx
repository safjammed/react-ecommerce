import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';
import { clearAllItems } from '../../redux/cart/cart.action';
import { withRouter } from 'react-router-dom';

const StripeCheckoutButton = ({ price,clearAllItems, history }) => {
    console.log("HISTORY", history);

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ga0ISFcalEboyYNlT7LQcVfs';
    const onToken = token => {
        clearAllItems();
        console.log(token); 
        //the token needs to be verified with the backend
        Swal.fire('Payment Successful!', '', 'success');
        history.push('/');
    }
    return (       
        <StripeCheckout
        label="Pay Now"
        name= 'CRWN clothing Ltd.'
        billingAddress
        shippingAddress
        image='http://svgshare.com/i/CUz.svg'
        description={`Your Total is $${price}`}
        amount= {priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />        
    );
}

const mapDispatchToProps = dispatch => ({
    clearAllItems : () => dispatch (clearAllItems())
})

export default withRouter (connect(null, mapDispatchToProps)(StripeCheckoutButton));