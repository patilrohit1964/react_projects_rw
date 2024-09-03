import { combineReducers, legacy_createStore ,applyMiddleware} from "redux";
import { Reducer as ProductReducer } from "./Reducer";
import { Reducer as LoginReducer } from "../auth/reducer";
import {thunk} from 'redux-thunk';
const rootReducer = combineReducers({ ProductReducer, LoginReducer });

export const Store = legacy_createStore(rootReducer,applyMiddleware(thunk));
