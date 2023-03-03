import mongoose from "mongoose";
import config from "../config/env.js";

const connectMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://newuser1:DF8PDUbCA4fnMsrP@next-mern-stack.ze4uf.mongodb.net/autolead_used_showroom?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

export default connectMongo;
