export const getWatchListsAction = (list) => (dispatch) => {
  dispatch({
    type: "GET_WATCHLISTS",
    payload: list,
  });
};

export const createListAction = (listName, emoji, _id) => (dispatch) => {
  dispatch({
    type: "CREATE_LIST",
    payload: {
      listName,
      emoji,
      _id,
    },
  });
};

export const renameListAction = (listName, emoji, _id) => (dispatch) => {
  dispatch({
    type: "RENAME_LIST",
    payload: { listName, emoji, _id },
  });
};

export const removeListAction = (_id) => (dispatch) => {
  dispatch({
    type: "REMOVE_LIST",
    payload: {
      _id,
    },
  });
};

export const addTickerToListAction = (symbol, _id) => (dispatch) => {
  dispatch({
    type: "ADD_TICKER_TO_LIST",
    payload: {
      symbol,
      _id,
    },
  });
};

export const removeTickerFromListAction = (symbol, _id) => (dispatch) => {
  dispatch({
    type: "REMOVE_TICKER_FROM_LIST",
    payload: {
      symbol,
      _id,
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
