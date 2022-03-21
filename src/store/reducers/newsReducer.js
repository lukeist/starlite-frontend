const initState = {
  general: [],
  crypto: [],
  newsActive: false,
};

const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return {
        ...state,
        general: action.payload.general,
        crypto: action.payload.crypto,
        newsActive: action.payload.newsActive,
      };

    default:
      return { ...state };
  }
};

export default newsReducer;
