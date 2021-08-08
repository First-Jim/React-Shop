/*
 * @Author: liujiaming
 * @Date: 2021-08-06 18:02:24
 * @LastEditTime: 2021-08-08 11:47:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/backend/routes/productsRoutes.js
 */
import express from "express";
import { authUser, getUserProfile } from "../controller/userController.js";
import { protect } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
