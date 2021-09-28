import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  breweries: [],
  error: "",
  isFetching: false
};

const BreweriesSearch = createSlice({
  name: "brewSearch",
  initialState,
  reducers: {
    brewSearchStart: (state, action) => {
      state.isFetching = true;
      state.error = "";
    },
    brewSearchSuccess: (state, action) => {
      state.breweries = action.payload;
      state.isFetching = false;
      state.error = "";
    },
    brewSearchFail: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  brewSearchStart,
  brewSearchSuccess,
  brewSearchFail
} = BreweriesSearch.actions;

// export const callItem = (search) => (dispatch) => {
//   dispatch(brewSearchStart());
//   axios
//     .get(`https://api.openbrewerydb.org/breweries/search?query=${search}`)
//     .then((res) => dispatch(brewSearchSuccess(res.data)))
//     .catch((err) => dispatch(brewSearchFail(err)));
// };

export const callItem = (search) => (dispatch) => {
  var state = `search?query=${search}`;
  dispatch(brewSearchStart());
  axios
    .get(`https://api.openbrewerydb.org/breweries/${state}`)
    .then((res) => dispatch(brewSearchSuccess(res.data)))
    .catch((err) => dispatch(brewSearchFail(err)));
};

export default BreweriesSearch.reducer;
