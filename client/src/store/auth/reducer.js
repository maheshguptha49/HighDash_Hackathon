import {
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";
import { loadData, saveData } from "../../utils/localSt";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: loadData("token") || "",
  user: loadData("user") || {},
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case LOGIN_SUCCESS:
      saveData("token", payload.token);
      saveData("user", payload.user);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: payload.token,
        user: payload.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: false,
        token: "",
        user: {},
      };

    default:
      return state;
  }
};
