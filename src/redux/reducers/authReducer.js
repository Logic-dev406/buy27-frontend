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
    case actionTypes.LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case actionTypes.LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case actionTypes.USER_REQUEST:
      return {
        isAuthenticated: false,
      };
    case actionTypes.USER_LOADED:
      return {
        isAuthenticated: false,
        user: action.payload,
      };
    case actionTypes.USER_FAIL:
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
