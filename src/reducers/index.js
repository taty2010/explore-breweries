import { combineReducers } from "redux";
import getStates from "./reduceState";
import Reduce from "./reducer";

const rootReducer = combineReducers({
  States: getStates,
  BrewList: Reduce
});

export default rootReducer;
