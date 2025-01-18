import express from "express";
import { contactMiddleware } from "../middlewares/contactMiddleware.js";
import { contactController } from "../controller/contactController.js";

const contactrouter = express.Router();

contactrouter.route("/").post(contactMiddleware, contactController)

export default contactrouter;