const initState = [
  {
    listName: "My First List",
    id: "my1stlist",
    emoji: "🌙",
    tickers: [],
  },
];

const listReducer = (state = initState, action) => {
  const tickersArray = [];
  switch (action.type) {
    case "CREATE_LIST":
      return [
        ...state,
        {
          listName: action.payload.listName,
          id: action.payload.id,
          emoji: action.payload.emoji,
          tickers: tickersArray,
        },
      ];
    case "RENAME_LIST":
      // const stateWithoutCurrentList = state.filter(
      //   (list) => list.id !== action.payload.id
      // );
      // const currentList = state.filter((list) => list.id === action.payload.id);
      // currentList.listName = action.payload.listName;
      // const stateWithNewList = stateWithoutCurrentList.push(currentList);
      return state;
    // stateWithNewList;
    case "REMOVE_LIST":
      return state.filter((list) => list.id !== action.payload.id);

    case "ADD_TICKER_TO_LIST":
      // remove the list out of lists
      // const stateWithoutCurrentList = state.filter(
      //   (list) => list.id !== action.payload.id
      // );
      // // take the list and modify its tickers
      // const currentList = state.filter((list) => list.id === action.payload.id);
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
