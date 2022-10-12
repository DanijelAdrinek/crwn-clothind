import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import { CartDropdownContainer, CartItems, ButtonStyled, EmptyMessage } from "./cart-dropdown.styles.jsx";

import CartItem from "../cart-item/cart-item.components";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const { isCartOpen, setIsCartOpen} = useContext(CartContext);
    
    const navigate = useNavigate();
  
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    const goToCheckoutPage = () => {
        toggleIsCartOpen();
        navigate("/checkout");
    };

    return(
        <CartDropdownContainer>
            <CartItems>
                {   
                    cartItems.length ? cartItems.map(item => {
                        return <CartItem key={item.id} cartItem={item} />
                    }) : (
                        <EmptyMessage>Your Cart is Empty</EmptyMessage>
                    )
                }
            </CartItems>
            <ButtonStyled onClick={goToCheckoutPage}>GO TO CHECKOUT</ButtonStyled>
        </CartDropdownContainer>
    );
}

export default CartDropdown;