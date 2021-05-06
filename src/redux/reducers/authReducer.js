import * as actionTypes from "../constants/authConstants";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        user: action.payload,
        loading: false,
      };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };

    case actionTypes.LOGIN_FAIL:
    case actionTypes.SIGNUP_FAIL:
      localStorage.removeItem("token");
      return {
        token: null,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
