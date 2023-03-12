import mongoose from "mongoose";

export const ShowroomSchemaFields = {
  showroomName: { type: String, required: true, unique: true },
  showroomSlug: { type: String, required: true, unique: true },
  showroomDescription: { type: String },
  showroomLogo: { url: { type: String } },
  showroomLogoDarkBG: { url: { type: String } },
  showroomSignupDate: { type: Date },
  showroomServiceEndDate: { type: Date },
  showroomPrimaryColour: { hex: { type: String } },
  showroomSecondaryColour: { hex: { type: String } },
  showroomPrimaryFont: { type: String },
  webfontProjectId: { type: String },
  showroomPrimaryPhone: { type: String },
  showroomPrimaryEmail: { type: String },
  showroomContactName: { type: String },
  showroomRelatedVehiclesRange: { type: String },
  showroomVehicleMileageThreshold: { type: String },
  maximumPopularMakesOnHomepage: { type: String },
  maximumFeaturedVehiclesOnHomepage: { type: String },
  showroomDomainName: { type: String },
  usedVehicles: [String],
  blogArticles: [String],
};

const ShowroomSchema = new mongoose.Schema(ShowroomSchemaFields, {
  timestamps: true,
});

const Showroom = mongoose.model("Showroom", ShowroomSchema);

export default Showroom;
