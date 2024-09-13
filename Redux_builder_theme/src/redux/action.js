import { DARK, DECREMENT, INCREMENT, LIGHT } from "./actionType";

export function handleIncrement(dispatch) {
  return dispatch({ type: INCREMENT, payload: 1 });
}

export function handleDecrement(dispatch) {
  return dispatch({ type: DECREMENT, payload: 1 });
}

export function ToggleLight(dispatch) {
  return dispatch({ type: LIGHT, payload: "light" });
}
export function ToggleDark(dispatch) {
  return dispatch({ type: DARK, payload: "dark" });
}
