export const createListAction = (listName, emoji, id) => (dispatch) => {
  dispatch({
    type: "CREATE_LIST",
    payload: {
      listName,
      id,
      emoji,
    },
  });
};

export const renameListAction = (listName, emoji, id) => (dispatch) => {
  dispatch({
    type: "RENAME_LIST",
    payload: { emoji, listName, id },
  });
};

export const removeListAction = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_LIST",
    payload: {
      id,
    },
  });
};

export const addTickerToListAction = (symbol, id) => (dispatch) => {
  dispatch({
    type: "ADD_TICKER_TO_LIST",
    payload: {
      symbol,
      id,
    },
  });
};

export const removeTickerFromListAction = (symbol, id) => (dispatch) => {
  dispatch({
    type: "REMOVE_TICKER_FROM_LIST",
    payload: {
      symbol,
      id,
    },
  });
};

export const currentPriceStreamingInListAction =
  (symbol, quoteStreaming) => (dispatch) => {
    dispatch({
      type: "STREAMING_PRICE_IN_LIST",
      payload: {
        symbol,
        quoteStreaming,
      },
    });
  };
