import express from "express";
import { addNewsletter, verifyNewsletter } from "../controllers/newsletter.js";

const subscriberRouter = express.Router();

subscriberRouter.post("/subscribe", addNewsletter);
subscriberRouter.post("/verify/:email", verifyNewsletter);

export default subscriberRouter;
