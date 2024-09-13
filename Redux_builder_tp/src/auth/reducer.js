import {
  Login_Failed,
  Login_Request,
  Login_Success,
} from "../redux/ActionType";

const initialState = {
  isError: false,
  isLoading: false,
  token: null,
};
export const Reducer = (state=initialState, action) => {
  switch (action.type) {
    case Login_Request:
      return { isError: false, isLoading: true, token: null };
    case Login_Success:
      return { isError: false, isLoading: false, token: action.payload };
    case Login_Failed:
      return { isError: true, isLoading: false, token: null };
    default:
      return state;
  }
};
