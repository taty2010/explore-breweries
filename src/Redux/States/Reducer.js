import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breweriesState: [],
  errorState: "",
  isFetchingState: false,
  stateSuccess: false
};

const BrewByState = createSlice({
  name: "BrewByState",
  initialState,
  reducers: {
    brewStateStart: (state) => {
      state.isFetchingState = true;
      state.errorState = "";
      state.stateSuccess = false;
    },
    brewStateSuccess: (state, action) => {
      state.breweriesState = action.payload;
      state.isFetchingState = false;
      state.stateSuccess = true;
      state.errorState = "";
    },
    brewStateFail: (state, action) => {
      state.errorState = action.payload;
    }
  }
});

export const {
  brewStateStart,
  brewStateSuccess,
  brewStateFail
} = BrewByState.actions;

export const callState = (findState) => (dispatch) => {
  var state = `search?query=${findState}`;
  dispatch(brewStateStart());
  axios
    .get(`https://api.openbrewerydb.org/breweries/${state}`)
    .then((res) => dispatch(brewStateSuccess(res.data)))
    .catch((err) => dispatch(brewStateFail(err)));
};

export default BrewByState.reducer;
