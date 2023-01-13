const authState = {
    isLogin: true,
}

 export const authReducer = (auth = authState, action) => {
   switch (action.type) {
    case true:
        return {
            ...authState,
            isLogin:action.payload
        };
        case false:
        return {
            ...authState,
            isLogin:action.payload
        };
        
   
    default:
       return auth;
   }
    
}