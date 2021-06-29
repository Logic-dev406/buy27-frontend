import * as actionTypes from '../constants/orderConstants';
import setAuthToken from '../../helper/setAuthToken';
import axios from 'axios';

const Api = require('../../config/config');

export const createOrder = (orderData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CREATE_ORDER_REQUEST });

    const { data } = await axios.post(
      `${Api.LiveBackendUrl}/api/orders`,
      orderData
    );

    dispatch({
      type: actionTypes.CREATE_ORDER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserOrder = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_USER_ORDER_LIST_REQUEST });

    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const { data } = await axios.get(
      `${Api.LiveBackendUrl}/api/orders/get/userorders`
    );

    dispatch({
      type: actionTypes.GET_USER_ORDER_LIST_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_USER_ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
