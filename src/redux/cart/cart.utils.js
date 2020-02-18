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