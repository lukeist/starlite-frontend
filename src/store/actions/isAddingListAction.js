export const isAddingList = () => (dispatch) => {
  dispatch({
    type: "IS_ADDING",
    payload: {
      adding: true,
    },
  });
};

export const isNotAddingList = () => (dispatch) => {
  dispatch({
    type: "NOT_ADDING",
    payload: {
      adding: false,
    },
  });
};
