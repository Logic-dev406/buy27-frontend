import * as actionTypes from "../constants/authConstants";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case actionTypes.LOGIN_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        user: action.payload,
        loading: false,
      };

    case actionTypes.LOGIN_FAIL:
    case actionTypes.SIGNUP_FAIL:
      localStorage.removeItem("token");
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
