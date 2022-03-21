import { combineReducers } from "redux";
import listReducer from "./reducers/listReducer";
import favReducer from "./reducers/favReducer";
import newsReducer from "./reducers/newsReducer";
import searchReducer from "./reducers/searchReducer";
import stocksReducer from "./reducers/stocksReducer";
import currentPriceStreamingReducer from "./reducers/currentPriceStreamingReducer";

const entitiesReducer = combineReducers({
  streaming: currentPriceStreamingReducer,
  search: searchReducer,
  news: newsReducer,
  stock: stocksReducer,
  stockFavorites: favReducer,
  stockLists: listReducer,
});

export default entitiesReducer;
