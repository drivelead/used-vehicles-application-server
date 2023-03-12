import twilio from "twilio";
import env from "../config/env.js";

const accountSid = "AC6d0dbe0771a88d628e07291588a71d8d";
const authToken = env.TWILIO_AUTH_TOKEN;

export default twilio(accountSid, authToken);
