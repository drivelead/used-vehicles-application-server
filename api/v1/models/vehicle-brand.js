import mongoose from "mongoose";

export const VehicleBrandSchemaFields = {
  brandName: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  founded: { type: String | Number },
  brandWebsite: { type: String },
  brandHistory: { type: String },
  logoMeaning: { type: String },
  featuredImage: { url: { type: String } },
  logoRef: { url: { type: String } },
  usedVehicles: [String],
};

const VehicleBrandSchema = new mongoose.Schema(VehicleBrandSchemaFields, {
  timestamps: true,
});

const VehicleBrand = mongoose.model("VehicleBrand", VehicleBrandSchema);

export default VehicleBrand;
