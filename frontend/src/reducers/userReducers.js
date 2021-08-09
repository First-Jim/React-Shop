/*
 * @Author: your name
 * @Date: 2021-08-08 16:08:54
 * @LastEditTime: 2021-08-09 16:28:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/frontend/src/reducers/userReducers.js
 */
import {
  USER_LOGOUT,
  USER_LOGIN_FALL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_REGISTER_FALL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
} from "../constants/userContants";

//用户登录的reducer
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FALL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

//用户注册的reducer
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FALL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
