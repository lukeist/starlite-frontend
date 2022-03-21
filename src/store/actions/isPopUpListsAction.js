export const showPopUpAction = () => (dispatch) => {
  dispatch({
    type: "SHOW_POPUP",
    payload: {
      isPopUp: true,
    },
  });
};

export const hidePopUpAction = () => (dispatch) => {
  dispatch({
    type: "HIDE_POPUP",
    payload: {
      isPopUp: false,
    },
  });
};
