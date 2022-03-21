// const initState = [];

const favReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAV":
      return state.findIndex((stock) => {
        // find index of an object => to check if this object is in state of the list
        return stock.symbol === action.payload.symbol;
      }) > -1
        ? //   state.indexOf({
          //     symbol: action.payload.symbol,
          //     quote: action.payload.quote,
          //   }) > -1
          [...state] // if object is already in state => return state
        : [
            ...state,
            {
              symbol: action.payload.symbol,
              quote: action.payload.quote,
              listId: [action.payload.listId],
            }, // if not, return state with new object
          ];
    case "REMOVE_FAV":
      return state.filter((stock) => stock.symbol !== action.payload.symbol);
    default:
      return state;
  }
};

export default favReducer;
