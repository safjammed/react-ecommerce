import { createStore, applyMiddleware } from "redux";
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
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;