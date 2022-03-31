const initState = [];

const listReducer = (state = initState, action) => {
  const tickersArray = [];
  const listActiveOnListPage = false;

  switch (action.type) {
    case "GET_WATCHLISTS":
      state = action.payload;
      return [...state];
    case "GET_WATCHLISTS_NAMES":
      state = action.payload;
      return [...state];
    case "CREATE_LIST":
      return [
        ...state,
        {
          _id: action.payload._id,
          listName: action.payload.listName,
          emoji: action.payload.emoji,
          tickers: tickersArray,
        },
      ];
    case "RENAME_LIST":
      const indexList = state.findIndex(
        (list) => list._id === action.payload._id
      );
      state[indexList].listName = action.payload.listName;
      state[indexList].emoji = action.payload.emoji;
      return [...state];

    case "REMOVE_LIST":
      return state.filter((list) => list._id !== action.payload._id);

    case "ADD_TICKER_TO_LIST":
      return [...state];
    case "ADD_TICKER_TO_DB":
      return [...state];
    case "REMOVE_TICKER_FROM_LIST":
      return [...state];
    case "REMOVE_TICKER_FROM_DB":
      return [...state];
    case "STREAMING_PRICE_IN_LIST":
      const index = state.tickers?.findIndex(
        (item) => item.symbol === action.payload.symbol
      );
      if (state.tickers?.length > 0) {
        state.tickers[index].quoteStreaming = action.payload.quoteStreaming;
        return;
      }
      return [...state];

    default:
      return state;
  }
};

export default listReducer;
