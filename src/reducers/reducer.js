import {
  CALL_ITEM,
  CALL_ITEM_SUCCESS,
  CALL_ITEM_FAIL
} from "../actions/action";

const initialState = {
  breweries: [],
  error: "",
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log("reducer", action);
  switch (action.type) {
    case CALL_ITEM:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case CALL_ITEM_SUCCESS:
      return {
        ...state,
        breweries: action.payload,
        isFetching: false,
        error: ""
      };
    case CALL_ITEM_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
