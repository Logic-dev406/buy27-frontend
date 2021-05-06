import * as actionTypes from "../constants/authConstants";
import axios from "axios";

export const signUp = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SIGNUP_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://backend.buy27.ng/api/users/register",
      formData,
      config
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
