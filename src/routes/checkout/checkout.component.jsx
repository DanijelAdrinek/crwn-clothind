import "./checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import CheckoutHeader from "../../components/checkout-header/checkout-header.component";

const Checkout = () => {

    const {cartItems, totalPrice} = useContext(CartContext);

    return (
        <div className="checkout-container">
            <CheckoutHeader />
            {   
                cartItems.map(cartItem => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
                })
            }
            <span className="total">TOTAL PRICE: ${totalPrice}</span>
        </div>
    )

}

export default Checkout;