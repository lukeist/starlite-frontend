const initState = {
  _id: "",
  listName: "",
  emoji: "",
  tickers: [],
  active: "",
};

const getWatchListFromParamsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_WATCHLIST_FROM_PARAMS":
      const list = action.payload;
      return { ...list };
    default:
      return state;
  }
};
export default getWatchListFromParamsReducer;
