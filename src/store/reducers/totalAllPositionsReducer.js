const initState = {};
const totalAllPositionsReducer = (state = initState, action) => {
  switch (action.type) {
    case "CURRENT_TOTAL":
      state = action.payload.total;
      return { ...state };
    default:
      return state;
  }
};

export default totalAllPositionsReducer;
