export const isRenamingList = () => (dispatch) => {
  dispatch({
    type: "IS_RENAMING",
    payload: {
      popupRenamingList: true,
    },
  });
};

export const isNotRenamingList = () => (dispatch) => {
  dispatch({
    type: "NOT_RENAMING",
    payload: {
      popupRenamingList: false,
    },
  });
};

export const isDeletingList = () => (dispatch) => {
  dispatch({
    type: "IS_DELETING",
    payload: {
      popupDeletingList: true,
    },
  });
};

export const isNotDeletingList = () => (dispatch) => {
  dispatch({
    type: "NOT_DELETING",
    payload: {
      popupDeletingList: false,
    },
  });
};
