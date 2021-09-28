// import axios from "axios";

// import { CALL_ITEM, CALL_ITEM_SUCCESS, CALL_ITEM_FAIL } from "./Breweries";

// export const callItem = (search) => (dispatch) => {
//   console.log("SEARCH", search);
//   dispatch({ type: CALL_ITEM });
//   axios
//     .get(`https://api.openbrewerydb.org/breweries/search?query=${search}`)
//     .then((res) => dispatch({ type: CALL_ITEM_SUCCESS, payload: res.data }))
//     .catch((err) => dispatch({ type: CALL_ITEM_FAIL, payload: err }));
// };
