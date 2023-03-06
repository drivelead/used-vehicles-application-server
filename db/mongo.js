import mongoose from "mongoose";
// import config from "../config/env.js";

const connectMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://autolead-used-showroom:bpcR0P3L9Wr0Apnv@autolead-used-showroom.pyut55l.mongodb.net/autolead_vms?retryWrites=true&w=majority",
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
