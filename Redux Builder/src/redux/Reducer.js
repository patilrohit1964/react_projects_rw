import { getRequest, getResponse, reqFailed } from "./ActionType";

const initialState = {
  isError: false,
  data: [],
  isLoading: false,
  theme:'light'
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case getRequest:
      return { isError: false, isLoading: true, data: [] };
    case getResponse:
      return { isError: false, isLoading: false, data: action.payload };
    case reqFailed:
      return { isError: true, isLoading: false, data: [] };
    case 'toggle':
      return {...state, theme: state.theme === 'light'? 'dark' : 'light' };
    default:
      return state;
  }
};
