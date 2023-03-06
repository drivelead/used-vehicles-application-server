import mongoose from "mongoose";

const SellYourVehicleSchema = new mongoose.Schema(
  {
    vehicleInformation: {
      vehicleMake: { type: String },
      vehicleModel: { type: String },
      modelYear: { type: String },
      askingPrice: { type: String },
      mileage: { type: String },
      vin: { type: String },
      exteriorColour: { type: String },
      interiorColour: { type: String },
      owner: { type: String },
    },
    vehicleCondition: {
      exteriorCondition: { type: String },
      interiorCondition: { type: String },
      accidentState: { type: String },
    },
    contactDetails: {
      firstName: { type: String },
      lastName: { type: String },
      email: { type: String },
      phone: { type: String },
      message: { type: String },
    },
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

const SellYourVehicle = mongoose.model(
  "SellYourVehicle",
  SellYourVehicleSchema
);

export default SellYourVehicle;
