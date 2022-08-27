import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import { CartDropdownContainer, CartItems, ButtonStyled } from "./cart-dropdown.styles.jsx";

import CartItem from "../cart-item/cart-item.components";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutPage = () => {
        navigate("/checkout");
    }

    return(
        <CartDropdownContainer>
            <CartItems>
                {   cartItems.map(item => {
                        return <CartItem key={item.id} cartItem={item} />
                    })
                }
            </CartItems>
            <ButtonStyled onClick={goToCheckoutPage}>GO TO CHECKOUT</ButtonStyled>
        </CartDropdownContainer>
    );
}

export default CartDropdown;