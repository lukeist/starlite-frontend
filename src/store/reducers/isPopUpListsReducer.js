// const initState = [];

const isPopUpListsReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_POPUP":
      return (state = action.payload.isPopUp);
    case "HIDE_POPUP":
      return (state = action.payload.isPopUp);
    default:
      return state;
  }
};

export default isPopUpListsReducer;
