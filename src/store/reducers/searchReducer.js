const initState = {
  result: [],
  //   description: "",
  //   symbol: "",
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return { ...state, result: action.payload.result };
    default:
      return { ...state };
  }
};

export default searchReducer;
