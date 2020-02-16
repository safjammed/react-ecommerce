
import userReducer from "./user/user.reducer";
import { combineReducers } from "redux";

/**
* Root state is a one big onjects
* The keys represent the slices of it
* the reducer represents the state of 
* the applicaitons 
*/
export default combineReducers({
    user: userReducer
})