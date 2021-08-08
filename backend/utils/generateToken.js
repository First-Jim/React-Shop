/*
 * @Author: your name
 * @Date: 2021-08-08 00:04:24
 * @LastEditTime: 2021-08-08 00:07:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/backend/utils/generateToken.js
 */
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateToken;
