/*
 * @Author: liujiaming
 * @Date: 2021-08-06 18:02:24
 * @LastEditTime: 2021-08-07 21:53:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/backend/routes/productsRoutes.js
 */
import express from "express";
import {
  getProducts,
  getProductById,
} from "../controller/productController.js";
const router = express.Router();

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
