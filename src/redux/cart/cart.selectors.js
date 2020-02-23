/**
 * Selectors are used for memoization
 * which is a technic that is used generallyi for 
 * stopping component redender when its not needed
 * (The code is complicated, I still have a vague idea
 * not a clear one, hope it'll change in the future)
 * 
 * 
 * mapstatetoprops functions get the whole state 
 * object and then pulls off just a small portion or 
 * a slice of that state. We're computing 
 * out a new value based off of the state. whenever any reducer updates 
 * we're always returning a new object. Now whenever we return a new object
 * and Redux re composes and rebuilds the entire state object map states
 * of props is actually getting called every single time which is always 
 * passing in new props to our components. And why this is important is because 
 * this is always re rendering our components.
 * 
 * We should be using memoization for mapstatetoProps so that it doesnt require
 * re rendering too much which can have a great impact on performance
 * */ 

import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce( 
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 
        0 
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce( 
        (accumalatedQuantity, cartItem) => 
            accumalatedQuantity + (cartItem.price * cartItem.quantity), 
        0 
    )
)