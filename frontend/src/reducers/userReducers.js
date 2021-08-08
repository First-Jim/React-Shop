/*
 * @Author: your name
 * @Date: 2021-08-08 16:08:54
 * @LastEditTime: 2021-08-08 16:14:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/frontend/src/reducers/userReducers.js
 */
import {
  USER_LOGOUT,
  USER_LOGIN_FALL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
} from "../constants/userContants";

//全部商品的reducer
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
