import express from "express";
import { addContactController } from "../controllers/contact.js";

const contactRouter = express.Router();

contactRouter.route("/").post(addContactController);

export default contactRouter;
