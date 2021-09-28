import {
  CALL_STATE,
  CALL_STATE_SUCCESS,
  CALL_STATE_FAIL
} from "../actions/actionState";

const initialState = {
  breweriesState: [],
  errorState: "",
  isFetchingState: false
};

function reducerState(state = initialState, action) {
  switch (action.type) {
    case CALL_STATE:
      return {
        ...state,
        isFetchingState: true,
        errorState: ""
      };
    case CALL_STATE_SUCCESS:
      return {
        ...state,
        breweriesState: action.payload,
        isFetchingState: false,
        errorState: ""
      };
    case CALL_STATE_FAIL:
      return {
        ...state,
        errorState: action.payload
      };
    default:
      return state;
  }
}

export default reducerState;
