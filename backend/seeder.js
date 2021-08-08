import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

//插入样本数据到数据库

const insertData = async () => {
  try {
    // 清空数据库中的样本数据
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    // 实现样本数据插入
    const CreateUsers = await User.insertMany(users);

    // 获取一个管理员信息
    // console.log("CreateUsers: ", CreateUsers);

    const adminUser = CreateUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    // 插入数据成功

    console.log(`样本数据插入成功`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`样本数据插入失败`.red.inverse, err);
  }
};

// 销毁数据
const destoryData = async () => {
  try {
    // 清空数据库中的样本数据
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();
    // 销毁数据成功
    console.log(`销毁数据成功`.green.inverse);
    process.exit();
  } catch (err) {
    console.log(`销毁数据失败`.red.inverse, err);
    process.exit(1);
  }
};

// 判断node 命令执行的函数

if (process.argv[2] === "-d") {
  destoryData();
} else {
  insertData();
}
