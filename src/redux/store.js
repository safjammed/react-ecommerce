import { createStore, applyMiddleware } from "redux";
import {persistStore} from 'redux-persist';
import logger from "redux-logger";
import rootReducer from "./root-reducer";

/** Store expects middleware as an array 
 * so that multiple middlewares can be implemented
 */
const middlewares = [logger];

/**
 * ...middlewares is for scalability 
 * so that the array can be modified when needed
 */
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//below is the persisted version of the store of our application
// uses window.local
export const persistor = persistStore(store);

// export default {store, persistor};