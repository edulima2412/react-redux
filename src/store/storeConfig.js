import { createStore, combineReducers } from "redux";
import NumerosReducer from "./reducers/numeros";

const reducers = combineReducers({
    numeros: NumerosReducer
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig