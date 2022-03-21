export const currentTotalAction = (total) => (dispatch) => {
  dispatch({
    type: "CURRENT_TOTAL",
    payload: {
      total,
    },
  });
};
