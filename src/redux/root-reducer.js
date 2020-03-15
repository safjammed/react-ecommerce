
import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";


const persistConfig = {
    key: 'root',
    storage,
    // user is being handled by firebase
    // we only need cart data to persist
    whitelist: ['cart']
}


/**
* Root state is a one big onjects
* The keys represent the slices of it
* the reducer represents the state of 
* the applicaitons 
*/
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer 
});

export default persistReducer(persistConfig, rootReducer);