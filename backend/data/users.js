/*
 * @Author: your name
 * @Date: 2021-08-06 16:46:30
 * @LastEditTime: 2021-08-07 23:47:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/backend/data/users.js
 */
import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Summer",
    email: "summer@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "jiaming",
    email: "1441821178@qq.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
