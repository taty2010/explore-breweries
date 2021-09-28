import { combineReducers } from "@reduxjs/toolkit";
import States from "./States/Reducer";
import BreweriesSearch from "./BreweriesList/Reducer";

const rootReducer = combineReducers({
  States,
  BreweriesSearch
});

export default rootReducer;
