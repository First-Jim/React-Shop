/*
 * @Author: your name
 * @Date: 2021-08-06 16:16:44
 * @LastEditTime: 2021-08-08 15:38:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-Mobile-Shop/backend/models/userModel.js
 */
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamp: true,
  }
);
//实现用户密码加密
//写入数据库之前，将password加密
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//实现用户名密码是否匹配
userSchema.methods.matchPassword = async function (enteredPasswprd) {
  return await bcrypt.compare(enteredPasswprd, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
