import { combineReducers } from "redux";
import authenticationReducer from "./authentication";

const someApp = combineReducers({
  authenticated: authenticationReducer
});

export default someApp;
