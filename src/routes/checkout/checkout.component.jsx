import { CheckoutContainer, Total } from "./checkout.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";

const Checkout = () => {

    const {cartItems, totalPrice} = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader />
            {   
                cartItems.map(cartItem => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
                })
            }
            <Total>TOTAL PRICE: ${totalPrice}</Total>
        </CheckoutContainer>
    )

}

export default Checkout;