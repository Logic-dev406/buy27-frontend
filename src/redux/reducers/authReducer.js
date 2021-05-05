import * as actionTypes from "../constants/authConstants";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case actionTypes.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case actionTypes.LOGIN_FAIL:
    case actionTypes.SIGNUP_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case actionTypes.default:
      return state;
  }
};
