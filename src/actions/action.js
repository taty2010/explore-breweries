import axios from "axios";

export const CALL_ITEM = "CALL_ITEM";
export const CALL_ITEM_SUCCESS = "CALL_ITEM_SUCCESS";
export const CALL_ITEM_FAIL = "CALL_ITEM_FAIL";

const callItem = (search) => (dispatch) => {
  console.log("SEARCHING...", search);
  dispatch({ type: CALL_ITEM });
  axios
    .get(`https://api.openbrewerydb.org/breweries/search?query=${search}`)
    .then((res) => dispatch({ type: CALL_ITEM_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: CALL_ITEM_FAIL, payload: err }));
};

export default callItem;
