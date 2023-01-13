const counterState = {
    total:0,
}

 export const Reducer = (state = counterState, action) => {
   switch (action.type) {
    case 'KURANG':
        return {
            ...Reducer,
            total:action.payload
        };
        case 'TAMBAH':
        return {
            ...Reducer,
            total:action.payload
        };
        
   
    default:
       return state;
   }
    
}
