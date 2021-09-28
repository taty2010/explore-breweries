import axios from "axios";

export const CALL_STATE = "CALL_STATE";
export const CALL_STATE_SUCCESS = "CALL_STATE_SUCCESS";
export const CALL_STATE_FAIL = "CALL_STATE_FAIL";

const callState = (findState) => (dispatch) => {
  var state = `by_state=${findState}`;
  console.log(findState);
  dispatch({ type: CALL_STATE });
  axios
    .get(`https://api.openbrewerydb.org/breweries?Alabama`)
    .then((res) => dispatch({ type: CALL_STATE_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: CALL_STATE_FAIL, payload: err }));
};

export default callState;
