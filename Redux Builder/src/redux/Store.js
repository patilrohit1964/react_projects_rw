import { combineReducers, legacy_createStore } from "redux";
import { Reducer } from "./Reducer";

const rootReducer = combineReducers({ Reducer });

export const Store = legacy_createStore(rootReducer);
