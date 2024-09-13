import { combineReducers, legacy_createStore } from "redux";
import { reducer as ThemeReducer } from "./themeReducer";
import { reducer as CounterReducer } from "./counterReducer";

const rootReducer=combineReducers({ThemeReducer,CounterReducer});
export const store=legacy_createStore(rootReducer);