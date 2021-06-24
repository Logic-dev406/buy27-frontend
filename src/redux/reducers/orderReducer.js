import * as actionTypes from '../constants/orderConstants';

export const orderReducer = (state = { order: {} }, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ORDER_REQUEST:
      return {
        loadingn: true,
      };
    case actionTypes.CREATE_ORDER_SUCCESS:
      return {
        loadingn: false,
        order: action.payload,
      };
    case actionTypes.CREATE_ORDER_FAIL:
      return {
        loadingn: false,
        err: action.payload,
      };
    case actionTypes.GET_USER_ORDER_REQUEST:
      return {
        loadingn: true,
      };
    case actionTypes.GET_USER_ORDER_SUCCESS:
      return {
        loadingn: false,
        order: action.payload,
      };
    case actionTypes.GET_USER_ORDER_FAIL:
      return {
        loadingn: false,
        err: action.payload,
      };
    default:
      return state;
  }
};
