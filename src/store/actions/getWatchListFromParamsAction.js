import axios from "axios";
import { companyProfile, getWatchLists, quoteData } from "../../api";
import companyMarketCap from "../../components/_getCompanyMarketCap";

export const getWatchListFromParamsAction = (listId) => async (dispatch) => {
  const response = await axios.get(getWatchLists);
  const list = response.data;
  const filterListfromLists = response.data.filter(
    (list) => list._id === listId
  );
  const firstListInArrayIndex = 0;
  const watchList = filterListfromLists[firstListInArrayIndex];

  for (let j of watchList.tickers) {
    const quote = await axios.get(quoteData(j.symbol));
    const company = await axios.get(companyProfile(j.symbol));

    j.stockCurrentPrice = quote.data.c;
    j.stockPercentChange = quote.data.dp;
    j.stockPriceChange = quote.data.d;
    j.stockPreviousClose = quote.data.pc;
    j.marketCap = companyMarketCap(company.data);
  }

  dispatch({
    type: "GET_WATCHLIST_FROM_PARAMS",
    payload: watchList,
  });
};
