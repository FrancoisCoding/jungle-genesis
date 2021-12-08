import * as actionTypes from "./types";

export const setOpen = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_OPEN });
};

export const setAddress = (address) => (dispatch) => {
  dispatch({ type: actionTypes.SET_ADDRESS, payload: address });
};

export const setCaptcha = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_CAPTCHA });
};
