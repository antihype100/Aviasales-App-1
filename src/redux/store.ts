import {combineReducers} from "redux";
import {filterTransplantsReducer} from "./reducers/filterTransplantsReducer";


export const rootReducer = combineReducers({
    filter: filterTransplantsReducer
})

