const isAddingListReducer = (state = false, action) => {
  switch (action.type) {
    case "IS_ADDING":
      return (state = action.payload.adding);
    case "NOT_ADDING":
      return (state = action.payload.adding);
    default:
      return state;
  }
};

export default isAddingListReducer;
