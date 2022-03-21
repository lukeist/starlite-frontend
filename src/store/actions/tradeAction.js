// import axios from "axios";
// import { quoteData } from "../../api";

export const firstBuyAction = (symbol, companyName, quantity) => (dispatch) => {
  dispatch({
    type: "BUY_STOCK_FROM_ZERO_POSITION",
    payload: {
      symbol,
      companyName,
      quantity,
    },
  });
};

export const buyAction = (symbol, companyName, quantity) => (dispatch) => {
  dispatch({
    type: "BUY_STOCK_FROM_SOME_POSITIONS",
    payload: {
      symbol,
      companyName,
      quantity,
    },
  });
};

export const sellAction = (symbol, companyName, quantity) => (dispatch) => {
  dispatch({
    type: "SELL_POSITION",
    payload: {
      symbol,
      companyName,
      quantity,
    },
  });
};

export const sellAllAction = (symbol, companyName, quantity) => (dispatch) => {
  dispatch({
    type: "SELL_POSITION_ALL",
    payload: {
      symbol,
      companyName,
      quantity,
    },
  });
};

export const getSampleAction = () => (dispatch) => {
  dispatch({
    type: "GET_SAMPLE",
    payload: {},
  });
};

// export const getPortfolioUpdateToCurrentPrice =
//   (symbol, costBasisNumber) => async (dispatch) => {
//     const quote = await axios.get(quoteData(symbol));

//     dispatch({
//       type: "GET_PORTFOLIO_UPDATE_TO_CURRENT_PRICE",
//       payload: { symbol, quote, costBasisNumber },
//     });
//   };
export const getPortfolioUpdateToCurrentPriceAction =
  (symbol, current) => (dispatch) => {
    // const quote = await axios.get(quoteData(symbol));
    dispatch({
      type: "GET_PORTFOLIO_UPDATE_TO_CURRENT_PRICE",
      payload: { symbol, current },
    });
  };
