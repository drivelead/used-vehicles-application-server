import express from "express";
import { addVehicleBrand } from "../controllers/vehicle-brand.js";

const manufacturerRouter = express.Router();

manufacturerRouter.route("/").post(addVehicleBrand);

export default manufacturerRouter;
