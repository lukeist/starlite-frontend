export const isGotPortfolioUpdateToCurrentPriceDispatchedAction =
  () => (dispatch) => {
    dispatch({
      type: "IS_DISPATCHED",
      payload: {
        isGotPortfolioUpdateToCurrentPriceDispatched: true,
      },
    });
  };

export const isNotGotPortfolioUpdateToCurrentPriceDispatchedAction =
  () => (dispatch) => {
    dispatch({
      type: "NOT_DISPATCHED",
      payload: {
        isGotPortfolioUpdateToCurrentPriceDispatched: false,
      },
    });
  };
