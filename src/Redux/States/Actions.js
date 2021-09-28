import axios from "axios";
import { CALL_STATE, CALL_STATE_SUCCESS, CALL_STATE_FAIL } from "./States";

export const callState = (findState) => (dispatch) => {
  var state = `by_state=${findState}`;
  console.log(findState);
  dispatch({ type: CALL_STATE });
  axios
    .get(`https://api.openbrewerydb.org/breweries?${state}`)
    .then((res) => dispatch({ type: CALL_STATE_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: CALL_STATE_FAIL, payload: err }));
};
