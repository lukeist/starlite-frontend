import { combineReducers } from "redux";
import currentBalanceReducer from "./reducers/currentBalanceReducer";
import totalAllPositionsReducer from "./reducers/totalAllPositionsReducer";
import tradeReducer from "./reducers/tradeReducer";

const portfolioReducer = combineReducers({
  buyingPower: currentBalanceReducer,
  total: totalAllPositionsReducer,
  positions: tradeReducer,
});

export default portfolioReducer;
