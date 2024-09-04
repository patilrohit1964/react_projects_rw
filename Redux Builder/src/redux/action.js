import axios from "axios";
import { getRequest, getResponse, reqFailed } from "./ActionType";

export const getData = (paramObject) => async (dispatch) => {
  //   dispatch({ type: getRequest });
  try {
    let data = await axios("http://localhost:4500/Products", paramObject);
    dispatch({ type: getResponse, payload: data.data });
  } catch (err) {
    dispatch({ type: reqFailed });
  }
};
