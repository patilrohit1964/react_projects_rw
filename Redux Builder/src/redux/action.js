import axios from "axios";
import { getRequest, getResponse, reqFailed } from "./ActionType";
export async function getData(dispatch) {
//   dispatch({ type: getRequest });
  try {
    let data = await axios("http://localhost:4500/Products");
    dispatch({ type: getResponse, payload: data.data });
  } catch (err) {
    dispatch({ type: reqFailed });
  }
}
