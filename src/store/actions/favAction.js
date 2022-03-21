import axios from "axios";
import { quoteData } from "../../api";
export const addFavAction = (symbol, listId) => async (dispatch) => {
  // const general = await axios.get(marketNewsGeneralData);
  // const crypto = await axios.get(marketNewsCryptoData);
  const quote = await axios.get(quoteData(symbol));

  dispatch({
    type: "ADD_FAV",
    payload: {
      symbol,
      listId,
      quote: quote.data,
    },
  });
};

export const removeFavAction = (symbol, listId) => (dispatch) => {
  dispatch({
    type: "REMOVE_FAV",
    payload: {
      symbol,
      listId,
    },
  });
};
