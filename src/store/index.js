import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import messagesReducer from "./messages";
import portfolioReducer from "./portfolio";
import utilitiesReducer from "./utilities";
const rootReducer = combineReducers({
  portfolio: portfolioReducer,
  entities: entitiesReducer,
  messages: messagesReducer,
  utilities: utilitiesReducer,
});

export default rootReducer;
