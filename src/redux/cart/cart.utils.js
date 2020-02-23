export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find( 
        cartItem => cartItem.id === cartItemToAdd.id
    );


    if(existingCartItem){
        // console.warn("cart item existsts");
        return cartItems.map( cartItem => 
            cartItem.id === cartItemToAdd.id  
            ? {...cartItem, quantity: cartItem.quantity + 1 }  
            : cartItem
        )
    }
    // console.info("new item");
    return [...cartItems, { ...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find( 
        cartItem => cartItem.id === cartItemToRemove.id
    );
    // if the quantity is only one then remove the item
    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }


    //else decrease the value
    return cartItems.map(        
        cartItem =>
        // if the cart item is the one that needs to me removed
        cartItem.id === cartItemToRemove.id ? 
        //then remove quantity
        {...cartItem, quantity: cartItem.quantity - 1}
        //else return the item as is
        : cartItem
    )


}