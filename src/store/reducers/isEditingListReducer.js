const iniState = { popupRenamingList: false, popupDeletingList: false };

const isEditingListReducer = (state = iniState, action) => {
  switch (action.type) {
    case "IS_RENAMING":
      return { ...state, popupRenamingList: action.payload.popupRenamingList };
    case "NOT_RENAMING":
      return { ...state, popupRenamingList: action.payload.popupRenamingList };
    case "IS_DELETING":
      return { ...state, popupDeletingList: action.payload.popupDeletingList };
    case "NOT_DELETING":
      return { ...state, popupDeletingList: action.payload.popupDeletingList };
    default:
      return state;
  }
};

export default isEditingListReducer;
