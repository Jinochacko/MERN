import express from "express";
import ManufacturesController from "../controllers/manufactures.controller.js";

const router = express.Router();

router
  .route("/")
  .get(ManufacturesController.getManufactures)
  .post(ManufacturesController.addManufactures);

export default router;
