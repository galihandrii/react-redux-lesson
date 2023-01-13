import { counterReducer } from "./counterReducer";
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
    counterReducer:counterReducer,
    authReducer:authReducer,
})

export default rootReducer;