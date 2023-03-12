import express from "express";
import { addUsedVehicle } from "../controllers/used-vehicle.js";

const usedVehicleRouter = express.Router();

usedVehicleRouter.route("/").post(addUsedVehicle);

export default usedVehicleRouter;
