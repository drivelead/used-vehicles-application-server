import mongoose from "mongoose";

export const UsedVehicleSchemaFields = {
  vehicleType: { type: String, required: true },
  colourGroup: { type: String, required: true },
  interiorColourGroup: { type: String, required: true },
  vehicleModel: { type: String },
  modelYear: { type: String | Number },
  odometer: { type: String | Number },
  price: { type: String | Number },
  transmission: { type: String },
  colourPaintName: { type: String },
  interiorColourName: { type: String },
  engineCapacity: { type: String | Number },
  engineDescription: { type: String },
  doors: { type: String | Number },
  featured: { type: Boolean, default: false },
  featuredOrder: { type: String | Number },
  popularityScore: { type: String | Number },
  location: { lat: String | Number, long: String | Number },
  description: { type: String },
  mainImage: { url: { type: String } },
  youTubeVideo: { type: String },
  vehicleBrand: { type: String },
  imageGallery: [{ url: { type: String } }],
  showroom: { type: String },
};

const UsedVehicleSchema = new mongoose.Schema(UsedVehicleSchemaFields, {
  timestamps: true,
});

const UsedVehicle = mongoose.model("UsedVehicle", UsedVehicleSchema);

export default UsedVehicle;
