import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import logger from "redux-logger";
import BrewStates from "./States/Reducer";
import BrewSearch from "./BreweriesList/Reducer";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware
});
