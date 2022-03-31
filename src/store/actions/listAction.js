import axios from "axios";
import { companyProfile, getWatchLists, quoteData } from "../../api";
import companyMarketCap from "../../components/_getCompanyMarketCap";

export const getWatchListsAction = () => async (dispatch) => {
  const response = await axios.get(getWatchLists);
  const list = response.data;

  // base on the tickers of each list, get current data of each ticker
  for (let i of list) {
    for (let j of i.tickers) {
      const quote = await axios.get(quoteData(j.symbol));
      const company = await axios.get(companyProfile(j.symbol));

      j.stockCurrentPrice = quote.data.c;
      j.stockPercentChange = quote.data.dp;
      j.stockPriceChange = quote.data.d;
      j.stockPreviousClose = quote.data.pc;
      j.marketCap = companyMarketCap(company.data);
    }
  }
  dispatch({
    type: "GET_WATCHLISTS",
    payload: list,
  });
};

export const getWatchListsNameAction = () => async (dispatch) => {
  const response = await axios.get(getWatchLists);
  const list = response.data;

  dispatch({
    type: "GET_WATCHLISTS_NAMES",
    payload: list,
  });
};

export const createListAction = (listName, emoji, _id) => (dispatch) => {
  dispatch({
    type: "CREATE_LIST",
    payload: {
      listName,
      emoji,
      _id,
    },
  });
};

export const renameListAction = (listName, emoji, _id) => (dispatch) => {
  dispatch({
    type: "RENAME_LIST",
    payload: { listName, emoji, _id },
  });
};

export const removeListAction = (_id) => (dispatch) => {
  dispatch({
    type: "REMOVE_LIST",
    payload: {
      _id,
    },
  });
};

export const addTickerToListAction = (stock, _id) => async (dispatch) => {
  dispatch({
    type: "ADD_TICKER_TO_LIST",
    payload: {
      stock,
      _id,
    },
  });
};

export const removeTickerFromListAction = (stock, _id) => (dispatch) => {
  dispatch({
    type: "REMOVE_TICKER_FROM_LIST",
    payload: {
      stock,
      _id,
    },
  });
};
