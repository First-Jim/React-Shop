/*
 * @Author: your name
 * @Date: 2021-08-06 13:24:20
 * @LastEditTime: 2021-08-08 00:14:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/backend/server.js
 */
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import productsRoutes from "./routes/productsRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleWare.js";

dotenv.config();

const app = express();
connectDB();
app.use(express.json()); //将传递的内容json
app.get("/", (req, res) => {
  res.send("服务在运行中...");
});

app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes);

// 自定义中间件 处理请求错误
app.use(notFound);
app.use(errorHandler);

const POST = process.env.POST || 5000;
app.listen(
  POST,
  console.log(
    `server is running ${process.env.NODE_ENV}, ${POST}`.cyan.underline
  )
);
