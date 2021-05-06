import * as actionTypes from "../constants/authConstants";
import axios from "axios";

export const signUp = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SIGNUP_REQUEST });

    const { data } = await axios.post(
      "https://backend.buy27.ng/api/users/register",
      formData
    );

    dispatch({
      type: actionTypes.SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });

    const { data } = await axios.post(
      "https://backend.buy27.ng/api/users/login",
      formData
    );

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
