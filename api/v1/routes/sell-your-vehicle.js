import express from "express";
import { addSellYourVehicleInfo } from "../controllers/sell-your-vehicle.js";

const sellYourVehicleRouter = express.Router();

sellYourVehicleRouter.route("/").post(addSellYourVehicleInfo);

export default sellYourVehicleRouter;
