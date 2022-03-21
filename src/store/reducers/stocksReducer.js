const initState = {
  quoteStreaming: 0,
  quote: {},
  company: {},
  companyNews: [],
  basicFinancials: {},
  stockActive: false,
};

const stocksReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_STOCKS":
      return {
        ...state,
        company: action.payload.company,
        quote: action.payload.quote,
        basicFinancials: action.payload.basicFinancials,
        companyNews: action.payload.companyNews,
        stockActive: action.payload.stockActive,
      };
    case "RESET_STOCKS":
      return { ...state, stockActive: action.payload.stockActive };
    case "STREAMING_PRICE":
      return { ...state, quoteStreaming: action.payload.quoteStreaming };
    default:
      return { ...state };
  }
};

export default stocksReducer;
