import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const NewsletterSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    verified: { type: Boolean, default: false },
    verifyToken: { type: String },
    email: { type: String, required: true, trim: true },
    verifiedAt: { type: Date },
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

NewsletterSchema.plugin(findOrCreate);

const Newsletter = mongoose.model("Newsletter", NewsletterSchema);

export default Newsletter;
