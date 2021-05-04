import * as actionTypes from "../constants/authConstants";

export const authReducer = (state = { user: {} }) => {
  switch (action.type) {
    case actionTypes.default:
      return state;
  }
};
