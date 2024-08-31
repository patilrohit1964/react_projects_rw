import { combineReducers, legacy_createStore } from "redux";
import { Reducer as ProductReducer } from "./Reducer";
import { Reducer as LoginReducer } from "../auth/reducer";
const rootReducer = combineReducers({ ProductReducer, LoginReducer });

export const Store = legacy_createStore(rootReducer);
