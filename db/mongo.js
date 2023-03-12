import mongoose from "mongoose";
import env from "../config/env.js";

const connectMongo = async () => {
  try {
    await mongoose.connect(env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default connectMongo;
