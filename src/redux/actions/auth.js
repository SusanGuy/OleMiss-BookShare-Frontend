import * as actionTypes from "./actionTypes";
import axios from "../../utils/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAuthToken } from "../../utils/auth";

export const clearErrors = () => {
  return { type: actionTypes.CLEAR_ERRORS };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(authStart());
      const submitForm = { email, password };
      const {
        data: { user, token },
      } = await axios.post("/users/login", submitForm);
      await AsyncStorage.setItem("userToken", token);
      dispatch(authSuccess(token, user));
    } catch (err) {
      dispatch(authFail(err.response ? err.response.data : err.message));
    }
  };
};

export const signup = (
  name,
  email,
  password,
  contact_number,
  classification,
  major
) => {
  return async (dispatch) => {
    try {
      dispatch(authStart());
      const submitForm = {
        name,
        email,
        password,
        contact_number,
        classification,
        major,
      };
      const {
        data: { user, token },
      } = await axios.post("/users", submitForm);
      await AsyncStorage.setItem("userToken", token);
      dispatch(authSuccess(token, user));
    } catch (err) {
      dispatch(authFail(err.response ? err.response.data : err.message));
    }
  };
};

export const loadUser = () => {
  return async (dispatch) => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      setAuthToken(token);
      const { data } = await axios.get("/users/me");
      const user = data;
      dispatch(authSuccess(token, user));
    } catch (err) {
      dispatch(authFail(err.response ? err.response.data : err.message));
    }
  };
};

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

const authSuccess = (token, user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: { token, user },
  };
};
const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: error,
  };
};

const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const signout = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem("userToken");
      dispatch(logout());
    } catch (err) {
      dispatch(authFail(err.response ? err.response.data : err.message));
    }
  };
};
