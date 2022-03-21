import { combineReducers } from "redux";
import tradeMessagesReducer from "./reducers/messagesReducer";

const messagesReducer = combineReducers({
  tradeMessages: tradeMessagesReducer,
});

export default messagesReducer;
