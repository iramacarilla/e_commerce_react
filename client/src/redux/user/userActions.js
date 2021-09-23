import axios from "axios";
import Cookie from "js-cookie";
import {
  SIGN_IN_USER_FAILURE,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
  USER_LOGOUT,
} from "./userTypes";

const api = "http://localhost:5000";

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch({ type: SIGN_IN_USER_REQUEST, payload: { email, password } });
    try {
      const { data } = await axios.post(api + "/api/users/signin", {
        email,
        password,
      });
      console.log("email", email);
      dispatch({
        type: SIGN_IN_USER_SUCCESS,
        payload: data,
      });
      Cookie.set("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: SIGN_IN_USER_FAILURE,
        payload: error.response.data.message,
      });
    }
  };
export const signUpUser =
  ({ name, email, password }) =>
  async (dispatch) => {
    dispatch({
      type: SIGN_UP_USER_REQUEST,
      payload: { name, email, password },
    });
    try {
      const { data } = await axios.post(api + "/api/users/register", {
        name,
        email,
        password,
      });
      dispatch({
        type: SIGN_UP_USER_SUCCESS,
        payload: data,
      });
      Cookie.set("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: SIGN_UP_USER_FAILURE,
        payload: error.message,
      });
    }
  };
export const logout = () => (dispatch) => {
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT });
};
