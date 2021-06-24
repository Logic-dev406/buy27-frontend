import * as actionTypes from '../constants/authConstants';
import setAuthToken from '../../helper/setAuthToken';
import axios from 'axios';

const Api = require('../../config/config');

export const signUp = (formData) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SIGNUP_REQUEST });

    const { data } = await axios.post(
      `${Api.LiveBackendUrl}/api/users/register`,
      formData
    );

    dispatch({
      type: actionTypes.SIGNUP_SUCCESS,
      payload: data.data,
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
      `${Api.LiveBackendUrl}/api/users/login`,
      formData
    );

    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data.data,
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

export const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    dispatch({ type: actionTypes.USER_REQUEST });

    const { data } = await axios.get(`${Api.LiveBackendUrl}/api/users/me`);

    dispatch({
      type: actionTypes.USER_LOADED,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const UpdateProfile = (formData) => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    dispatch({ type: actionTypes.UPDATE_PROFILE_REQUEST });

    const { data } = await axios.put(
      `${Api.LiveBackendUrl}/api/users/update`,
      formData
    );

    dispatch({
      type: actionTypes.UPDATE_PROFILE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: actionTypes.LOGOUT });
};
