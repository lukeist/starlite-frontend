export const tradeMessagesAction =
  (symbol, tradeCostPerShare, tradeQuantityTotal, tradeCostTotal, buy, time) =>
  (dispatch) => {
    dispatch({
      type: "TRADE_MESSAGE",
      payload: {
        symbol,
        tradeQuantityTotal,
        tradeCostPerShare,
        tradeCostTotal,
        buy,
        time,
      },
    });
  };

export const tradeMessagesSampleAction = () => (dispatch) => {
  dispatch({
    type: "TRADE_MESSAGE_SAMPLE",
    payload: {},
  });
};
