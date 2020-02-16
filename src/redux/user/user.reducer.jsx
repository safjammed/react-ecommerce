/** 
 * if the state didnt have 'any default values
 * this is much like class component's 
 * 
 * this.state = {
 *  ...stuffs
 * }
 * */ 
const INITIAL_STATE= {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;