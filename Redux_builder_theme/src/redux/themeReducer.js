import { DARK, LIGHT } from "./actionType";

const initialState = {
  theme: "light",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LIGHT:
      return { theme: action.payload };
    case DARK:
      return { theme: action.payload };
    default:
      return state;
  }
};
