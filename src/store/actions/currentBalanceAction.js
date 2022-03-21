export const currentBalanceAction = (balance) => (dispatch) => {
  dispatch({
    type: "CURRENT_BALANCE",
    payload: {
      balance,
    },
  });
};
