import mongoose from "mongoose";
import config from "../config/env.js";

const connectMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://autolead-used-showroom:JTFIYBm9yFRR0hH4@autolead-used-showroom.pyut55l.mongodb.net/autolead_used_showroom?retryWrites=true&w=majority",
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
