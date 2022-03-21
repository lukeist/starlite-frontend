const initState = {
  balance: 1000000,
};
const currentBalanceReducer = (state = initState, action) => {
  switch (action.type) {
    case "CURRENT_BALANCE":
      state.balance = action.payload.balance;
      return { ...state };

    default:
      return state;
  }
};

export default currentBalanceReducer;
