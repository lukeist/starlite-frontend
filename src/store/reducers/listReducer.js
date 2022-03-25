const initState = [];

const listReducer = (state = initState, action) => {
  const tickersArray = [];

  switch (action.type) {
    case "GET_WATCHLISTS":
      state = action.payload;
      return [...state];

    case "CREATE_LIST":
      return [
        ...state,
        {
          listName: action.payload.listName,
          emoji: action.payload.emoji,
          _id: action.payload._id,
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
      // remove the list out of lists
      // const stateWithoutCurrentList = state.filter(
      //   (list) => list._id !== action.payload._id
      // );
      // // take the list and modify its tickers
      // const currentList = state.filter((list) => list._id === action.payload._id);
      // currentList.tickers = ["111", "222"];
      // return new lists with the modified list inside
      return state;
    // [...state, stateWithoutCurrentList.push(currentList)];
    case "REMOVE_TICKER_FROM_LIST":
      return [...state];
    // [
    //   ...state,
    //   {
    //     tickers: tickersArray.filter(
    //       (ticker) => ticker !== action.payload.symbol
    //     ),
    //   },
    // ];
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
