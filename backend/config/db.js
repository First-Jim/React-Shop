import mongoose from "mongoose";
import colors from "colors";

// 链接数据库

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`Mongoose is connect in ${conn.connection.host}`.blue);
  } catch (err) {
    console.error(`Error: ${err}`.red);
    process.exit(1);
  }
};

export default connectDB;
