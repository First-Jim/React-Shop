/*
 * @Author: your name
 * @Date: 2021-08-07 23:12:27
 * @LastEditTime: 2021-08-08 14:03:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/backend/controller/userController.js
 */

import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
/**
 * @description: 用户身份验证 & 获取Token
 * @router POST/api/users/login
 * @access 公开
 */

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("邮箱或密码无效");
  }
});
/**
 * @description: 获取登录成功的用户详情
 * @router GET/api/users/profile
 * @access 私密
 */

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("用户不存在");
  }
});

export { authUser, getUserProfile };
