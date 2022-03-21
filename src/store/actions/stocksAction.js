import axios from "axios";
import {
  quoteData,
  // companyNewsData3Days,
  companyNewsData7Days,
  // companyNewsDataToday,
  basicFinancialsData,
  companyProfile,
} from "../../api";

export const stocksAction = (symbol) => async (dispatch) => {
  //fetch axios
  const company = await axios.get(companyProfile(symbol));
  const quote = await axios.get(quoteData(symbol));
  // const companyNewsToday = await axios.get(companyNewsDataToday(symbol));
  const basicFinancials = await axios.get(basicFinancialsData(symbol));
  const companyNews7Days = await axios.get(companyNewsData7Days(symbol));

  dispatch({
    type: "FETCH_STOCKS",
    payload: {
      company: company.data,
      quote: quote.data,
      basicFinancials: basicFinancials.data.metric,
      companyNews: companyNews7Days.data,
      stockActive: true,
    },
  });
};

export const resetStockPage = () => (dispatch) => {
  dispatch({
    type: "RESET_STOCKS",
    payload: {
      stockActive: false,
    },
  });
};

export const currentPriceStreamingAction = (quoteStreaming) => (dispatch) => {
  dispatch({
    type: "STREAMING_PRICE",
    payload: {
      quoteStreaming,
    },
  });
};
