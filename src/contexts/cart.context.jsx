import { useState, createContext, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SUBTRACT_ITEM_QUANTITY: 'SUBTRACT_ITEM_QUANTITY'
}

const INITIAL_STATE = {
    totalCartItems: 0,
    totalPrice: 0,
    isCartOpen: false,
    cartItems: []
}

/**
 * takes the type and payload, and executes the function necessary to complete the task
 *  
 * @param {object} action
 */
const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        case CART_ACTION_TYPES.IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }

};

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
    // const [isCartOpen, setIsCartOpen] = useState(false)
    // const [cartItems, setCartItems] = useState([]);
    // const [totalCartItems, setTotalCartItems] = useState(0);
    // const [totalPrice, setTotalPrice] = useState(0);

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const { isCartOpen, cartItems, totalCartItems, totalPrice } = state;

    const updateCartItemsReducer = (cartItems) => {
        const totalCartItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const totalPrice = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
        
        const payload = {
            cartItems,
            totalCartItems,
            totalPrice
        };
    
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,payload));
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = (addCartItem(cartItems, productToAdd));
        updateCartItemsReducer(newCartItems);
    };
    
    const removeItemFromCart = (productToRemove) => {
        const newCartItems = (removeCartItem(cartItems, productToRemove));
        updateCartItemsReducer(newCartItems);
    
    }

    const subtractQuantityFromItem = (productToSubtractQuantityFrom) => {
        const newCartItems = subtractItemQuantity(cartItems, productToSubtractQuantityFrom);
        updateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen = (isCartOpen) => {
        dispatch(createAction(CART_ACTION_TYPES.IS_CART_OPEN, isCartOpen));
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeItemFromCart,subtractQuantityFromItem, totalCartItems, totalPrice};
    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>    
    )

}