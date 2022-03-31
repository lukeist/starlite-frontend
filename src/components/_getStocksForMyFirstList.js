import axios from "axios";
import { quoteData, companyProfile, getWatchLists } from "../api";
import {
  addTickerToListAction,
  createListAction,
} from "../store/actions/listAction";
import companyMarketCap from "./_getCompanyMarketCap";

/////////////////////////////////////////////////////// For Automate
export const getWatchListsToRedux = async (dispatch) => {
  const response = await axios.get(getWatchLists);
  const watchLists = response.data;
  // base on the tickers of each list, get current data of each ticker
  for (let i of watchLists) {
    dispatch(createListAction(i.listName, i.emoji, i._id));
    console.log(i);
  }
};

export const getTickersToWatchLists = async (watchLists, dispatch) => {
  // const response = await axios.get(getWatchLists);
  // const watchLists = response.data;
  // // base on the tickers of each list, get current data of each ticker
  for (let i of watchLists) {
    await dispatch(createListAction(i.listName, i.emoji, i._id));

    for (let j of i.tickers) {
      const quote = await axios.get(quoteData(j.symbol));
      const company = await axios.get(companyProfile(j.symbol));
      const companyName = company.data.name;
      const stockCurrentPrice = quote.data.c;
      const stockPercentChange = Math.round(quote.data.dp * 100) / 100;
      const stockPriceChange = quote.data.d;
      const stockPreviousClose = quote.data.pc;
      const marketCap = companyMarketCap(company.data);
      const stock = {
        companyName,
        symbol: j.symbol,
        stockCurrentPrice,
        stockPriceChange,
        stockPercentChange,
        stockPreviousClose,
        marketCap,
      };

      // j.stockCurrentPrice = quote.data.c;
      // j.stockPercentChange = quote.data.dp;
      // j.stockPriceChange = quote.data.d;
      // j.stockPreviousClose = quote.data.pc;
      // j.marketCap = companyMarketCap(company.data);
      i.tickers.push(stock);
      dispatch(addTickerToListAction(stock, i._id));
    }
  }
};

// const getStocksForMyFirstList = async (dispatch, watchLists) => {
//   await getWatchListsToRedux(dispatch);
//   await getTickersToWatchLists(watchLists, dispatch);
// };

// export default getStocksForMyFirstList;
