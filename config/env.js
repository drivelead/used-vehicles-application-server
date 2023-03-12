import dotenv from "dotenv";

dotenv.config();

const env = {
  MONGO_URI:
    process.env.NODE_ENV === "production"
      ? process.env.ATLAS_URI
      : process.env.LOCAL_MONGO_URI,
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
};

export default env;
