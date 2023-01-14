const authState = {
    isLogin: true,
}

 export const authReducer = (state = authState, action) => {
   switch (action.type) {
    case "LOGIN":
        return {
            ...authState,
            isLogin:action.payload
        };
           
    default:
        return state;
   }
    
}