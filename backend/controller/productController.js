/*
 * @Author: 刘加明
 * @Date: 2021-08-07 21:27:36
 * @LastEditTime: 2021-08-07 23:23:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/backend/controller/productController.js
 */
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

/**
 * @description: 获取所有商品
 * @router GET/api/products
 * @access 公开
 * @return {*}
 */
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

/**
 * @description: 获取单个商品
 * @router GET/api/products/:id
 * @access 公开
 * @return {*}
 */
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("查找不到商品");
  }
});

export { getProducts, getProductById };
