const isGotPortfolioUpdateToCurrentPriceDispatchedReducer = (
  state = false,
  action
) => {
  switch (action.type) {
    case "IS_DISPATCHED":
      return true;
    case "NOT_DISPATCHED":
      return false;
    default:
      return state;
  }
};

export default isGotPortfolioUpdateToCurrentPriceDispatchedReducer;
