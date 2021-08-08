/*
 * @Author: liujiaming
 * @Date: 2021-08-08 11:05:08
 * @LastEditTime: 2021-08-08 14:01:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/backend/middleware/authMiddleWare.js
 */
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //解码
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //拿到用户的ID ，就可以保存，之后在被保护的路由中获取user
      req.user = await User.findById(decoded.id).select("-password");
      next(); //验证的时候才能进行下一步
    } catch (error) {
      res.status(401);
      throw new Error("未授权， token验证失败");
    }
  }
  if (!token) {
    // token不存在
    res.status(401);
    throw new Error("未授权, 没有token");
  }
});

export { protect };
