import * as actionTypes from "./types";

export const setAddress = (address) => (dispatch) => {
  dispatch({ type: actionTypes.SET_ADDRESS, payload: address });
};
