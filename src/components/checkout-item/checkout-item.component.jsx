import { CheckoutItemContainer, ImageContainer, Image, Name, Quantity, Arrow, Value, Price, RemoveButton } from "./checkout-item.styles.jsx";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
    
    const {name, imageUrl, quantity, price} = cartItem;

    const {addItemToCart, removeItemFromCart, subtractQuantityFromItem} = useContext(CartContext);

    const addQuantity = () => addItemToCart(cartItem);

    const subtractQuantity = () => subtractQuantityFromItem(cartItem);
    
    const removeItem = () => removeItemFromCart(cartItem);

    return (
      <CheckoutItemContainer>
        <ImageContainer>
            <Image src={imageUrl} alt={name} />
        </ImageContainer>
        <Name>{name}</Name>
        <Quantity>
            <Arrow onClick={subtractQuantity}>
                &#10094;
            </Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={addQuantity}>
                &#10095;
            </Arrow>
        </Quantity>
        <Price>${price}</Price>
        <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
      </CheckoutItemContainer>
    );

}

export default CheckoutItem;