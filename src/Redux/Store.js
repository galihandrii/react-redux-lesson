import { createStore } from "redux";

const counterState = {
    total:20,
}

const Reducer = (state = counterState) => {
    return state
}

const store = createStore(Reducer) ;

export default store;