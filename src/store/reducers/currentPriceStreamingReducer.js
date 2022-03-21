const initState = [];
const currentPriceStreamingReducer = (state = initState, action) => {
  switch (action.type) {
    case "STREAMING_PRICE":
      const index = state.findIndex(
        (item) => item.symbol === action.payload.symbol
      );
      if (index !== -1) {
        return [
          ...state,
          {
            symbol: action.payload.symbol,
            price: action.payload.price,
          },
        ];
      } else {
        state.length > 0 && (state[index].symbol = action.payload.symbol);
        return [...state];
      }

    default:
      return state;
  }
};

export default currentPriceStreamingReducer;
