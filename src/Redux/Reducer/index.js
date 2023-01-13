import { Reducer } from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    Reducer:Reducer,
})

export default rootReducer;