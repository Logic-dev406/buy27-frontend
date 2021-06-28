import * as actionTypes from '../constants/orderConstants';

export const orderReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ORDER_REQUEST:
      return {
        loading: true,
        orders: [],
      };
    case actionTypes.CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case actionTypes.CREATE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_USER_ORDER_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_USER_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case actionTypes.GET_USER_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
