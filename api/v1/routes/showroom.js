import express from "express";
import { addShowroom } from "../controllers/showroom.js";

const showroomRouter = express.Router();

showroomRouter.route("/").post(addShowroom);

export default showroomRouter;
