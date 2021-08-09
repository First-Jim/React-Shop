/*
 * @Author: liujiaming
 * @Date: 2021-08-08 16:12:59
 * @LastEditTime: 2021-08-09 16:41:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/frontend/src/actions/userActions.js
 */
import axios from "axios";
import {
  USER_LOGOUT,
  USER_LOGIN_FALL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_REGISTER_FALL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
} from "../constants/userContants";

/**
 * @description: 用户登录Action
 * @param {*}
 * @return {*}
 */
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    console.log("login: ", data);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FALL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

/**
 * @description: 用户注册Action
 * @param {*}
 * @return {*}
 */
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );
    console.log("register: ", data);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FALL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
