import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import loginReducer from "./loginReducer";
import singUpReducer from './singUpReducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  login: loginReducer,
  sign: singUpReducer
});

export default rootReducer;
