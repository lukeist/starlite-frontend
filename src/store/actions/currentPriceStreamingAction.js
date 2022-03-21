export const currentPriceStreamingAction = (symbol, price) => (dispatch) => {
  dispatch({
    type: "STREAMING_PRICE",
    payload: {
      symbol,
      price,
    },
  });
};
