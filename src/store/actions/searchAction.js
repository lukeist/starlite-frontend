import axios from "axios";
import { symbolLookupData } from "../../api";

export const searchAction = (terms) => async (dispatch) => {
  const symbolLookup = await axios.get(symbolLookupData(terms));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      result: symbolLookup.data.result,
    },
  });
};
