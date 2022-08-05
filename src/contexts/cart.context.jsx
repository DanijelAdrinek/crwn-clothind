import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

    const productExistsInCart = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if(productExistsInCart) {
        return cartItems.map(cartItem => {
            return cartItem.id === productToAdd.id ? 
                {...cartItem, quantity: cartItem.quantity + 1} : cartItem;
        });
    }

    
    return [...cartItems, {...productToAdd, quantity: 1}];

}

const removeCartItem = (cartItems, productToRemove) => cartItems.filter(cartItem => cartItem.id !== productToRemove.id);

const subtractItemQuantity = (cartItems, productToSubtractQuantityFrom) => {

    const theCartProduct = cartItems.find(cartItem => cartItem.id === productToSubtractQuantityFrom.id);

    if(theCartProduct.quantity > 1) {

        return cartItems.map(cartItem => {
            return cartItem.id === productToSubtractQuantityFrom.id && cartItem.quantity > 1 ?
                {...cartItem, quantity: cartItem.quantity - 1} : cartItem;
        });
    
    } else {

        return removeCartItem(cartItems, productToSubtractQuantityFrom);
    
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    subtractQuantityFromItem: () => {},
    totalCartItems: 0,
    setTotalCartItems: () => {},
    totalPrice: 0,
    setTotalPrice: () => {}
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // its a good practice to have a one useEffect govern one singular responsability, helps with code readability
    useEffect(() => {

        const cartItemsCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setTotalCartItems(cartItemsCount);
    
    }, [cartItems]);

    useEffect(() => {

        const totalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
        setTotalPrice(totalPrice);
    
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    };
    
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const subtractQuantityFromItem = (productToSubtractQuantityFrom) => {
        setCartItems(subtractItemQuantity(cartItems, productToSubtractQuantityFrom));
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart,subtractQuantityFromItem, totalCartItems, totalPrice};
    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>    
    )

}