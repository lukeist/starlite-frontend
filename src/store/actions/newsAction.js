import axios from "axios";
import { marketNewsGeneralData, marketNewsCryptoData } from "../../api";

export const newsAction = () => async (dispatch) => {
  const general = await axios.get(marketNewsGeneralData);
  const crypto = await axios.get(marketNewsCryptoData);
  dispatch({
    type: "FETCH_NEWS",
    payload: {
      general: general.data,
      crypto: crypto.data,
      newsActive: true,
    },
  });
};
