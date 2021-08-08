/*
 * @Author: your name
 * @Date: 2021-08-06 16:16:44
 * @LastEditTime: 2021-08-07 23:52:47
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

userSchema.methods.matchPassword = async function (enteredPasswprd) {
  return await bcrypt.compare(enteredPasswprd, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
