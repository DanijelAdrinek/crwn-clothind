import { useState, useContext } from "react";
import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";

import { CartContext } from "../../contexts/cart.context";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {BUTTON_TYPE_CLASSES} from "../button/button.component";

const PaymentForm = () => {

    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const { totalPrice } = useContext(CartContext);
    const stripe = useStripe();
    const elements = useElements();

    /**
     * Handles stripe payment
     * 
     * @param {*} e
     * @returns 
     */
    const paymentHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements || totalPrice <= 0) {
            return;
        }

        setIsProcessingPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: (totalPrice * 100) }),
        }).then(res => res.json());
        
        // destructuring the client_secret
        const {paymentIntent: { client_secret }} = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Guest',
                }
            }
        });

        setIsProcessingPayment(false);

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment Successful!');
            }
        }
    }

    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;