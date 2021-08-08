/*
 * @Author: liujiaming
 * @Date: 2021-08-06 18:02:24
 * @LastEditTime: 2021-08-07 23:30:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/backend/routes/productsRoutes.js
 */
import express from "express";
import { authUser } from "../controller/userController.js";
const router = express.Router();

router.post("/login", authUser);

export default router;
