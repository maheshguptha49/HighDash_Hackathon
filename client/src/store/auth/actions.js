import {
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";
import axios from "axios";
import { backurl } from "../../utils/url";

const signupRequest = () => {
  return { type: SIGNUP_REQUEST };
};
const signupSuccess = () => {
  return { type: SIGNUP_SUCCESS };
};
const signupFailure = () => {
  return { type: SIGNUP_FAILURE };
};

export const signup = (payload) => async (dispatch) => {
  console.log("payloadred:", payload);
  try {
    dispatch(signupRequest());
    const { data } = await axios.post(`${backurl}/api/register`, payload);
    // console.log("datasent:", data);
    dispatch(signupSuccess(data.token));
  } catch (err) {
    console.log("errSignup:", err);
    dispatch(signupFailure());
  }
};

const loginRequest = () => {
  return { type: LOGIN_REQUEST };
};
const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};
const loginFailure = () => {
  return { type: LOGIN_FAILURE };
};
const logoutSuccess = () => {
  return { type: LOGOUT };
};

export const logout = () => async (dispatch) => {
  localStorage.clear();
  dispatch(logoutSuccess());
};

export const login = (payload) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const { data } = await axios.post(`${backurl}/api/login`, payload);
    dispatch(loginSuccess(data));
  } catch (err) {
    console.log("errLogin:", err);
    alert("Email or Password is Wrong");
    dispatch(loginFailure());
  }
};
