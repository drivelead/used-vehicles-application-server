import mongoose from "mongoose";
import { VehicleBrandSchemaFields } from "./vehicle-brand.js";
import { ShowroomSchemaFields } from "./showroom.js";

export const UsedVehicleSchemaFields = {
  vehicleType: { type: String, required: true },
  colourGroup: { type: String, required: true },
  interiorColourGroup: { type: String, required: true },
  vehicleModel: { type: String },
  modelYear: { type: String },
  odometer: { type: String },
  price: { type: String },
  transmission: { type: String },
  colourPaintName: { type: String },
  interiorColourName: { type: String },
  engineCapacity: { type: String },
  engineDescription: { type: String },
  doors: { type: String },
  featured: { type: Boolean, default: false },
  featuredOrder: { type: String },
  popularityScore: { type: String },
  location: { lat: { type: String }, long: { type: String } },
  description: { type: String },
  mainImage: { url: { type: String } },
  youTubeVideo: { type: String },
  vehicleBrand: [VehicleBrandSchemaFields],
  imageGallery: [{ url: { type: String } }],
  showroom: ShowroomSchemaFields,
};

const UsedVehicleSchema = new mongoose.Schema(
  { UsedVehicleSchemaFields },
  {
    timestamps: true,
  }
);

const UsedVehicle = mongoose.model("UsedVehicle", UsedVehicleSchema);

export default UsedVehicle;
