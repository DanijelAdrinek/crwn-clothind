import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
    
    const {name, imageUrl, quantity, price} = cartItem;

    const {addItemToCart, removeItemFromCart, subtractQuantityFromItem} = useContext(CartContext);

    const addQuantity = () => addItemToCart(cartItem);

    const subtractQuantity = () => subtractQuantityFromItem(cartItem);
    
    const removeItem = () => removeItemFromCart(cartItem);

    return (
      <div className="checkout-item-container">
        <div className="imageContainer">
            <img src={imageUrl} alt={name} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={subtractQuantity}>
                &#10094;
            </div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={addQuantity}>
                &#10095;
            </div>
        </span>
        <span className="price">${price}</span>
        <div className="remove-button" onClick={removeItem}>&#10005;</div>
      </div>
    );

}

export default CheckoutItem;