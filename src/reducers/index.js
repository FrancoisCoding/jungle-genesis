import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialState = {
  open: false,
  address: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_OPEN:
      return {
        ...state,
        open: !state.open,
      };

    case actionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: reducer,
});

export default rootReducer;
