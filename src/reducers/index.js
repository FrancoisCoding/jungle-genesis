import { combineReducers } from "redux";
import * as actionTypes from "../actions/types";

const initialState = {
  open: false,
  address: "",
  solvedCaptcha: false,
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

    case actionTypes.SET_CAPTCHA:
      return {
        ...state,
        solvedCaptcha: true,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: reducer,
});

export default rootReducer;
