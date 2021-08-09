/*
 * @Author: your name
 * @Date: 2021-08-08 16:08:54
 * @LastEditTime: 2021-08-09 19:44:02
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
  USER_DETAILS_FALL,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_REQUEST,
  USER_UPDATE_DETAILS_FALL,
  USER_UPDATE_DETAILS_SUCCESS,
  USER_UPDATE_DETAILS_REQUEST,
  USER_DETAILS_RESET,
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
//用户详情的reducer
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { loading: true, ...state };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FALL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//更新用户详情的reducer
export const userUpdateDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_DETAILS_REQUEST:
      return { loading: true };
    case USER_UPDATE_DETAILS_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case USER_UPDATE_DETAILS_FALL:
      return { loading: false, error: action.payload, success: false };
    case USER_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};
