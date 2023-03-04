import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    message: { type: String },
    dealerInformation: {
      id: { type: String, required: true },
      slug: { type: String, required: true },
    },
    customerInformation: {
      locale: { type: String, default: "en" },
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
