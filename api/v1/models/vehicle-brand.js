import mongoose from "mongoose";
import { UsedVehicleSchemaFields } from "./used-vehicle.js";

export const VehicleBrandSchemaFields = {
  brandName: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  founded: { type: String },
  brandWebsite: { type: String },
  brandHistory: { type: String },
  logoMeaning: { type: String },
  featuredImage: { url: { type: String } },
  logoRef: { url: { type: String } },
  usedCars: [UsedVehicleSchemaFields],
};

const VehicleBrandSchema = new mongoose.Schema(VehicleBrandSchemaFields, {
  timestamps: true,
});

const VehicleBrand = mongoose.model("VehicleBrand", VehicleBrandSchema);

export default VehicleBrand;
