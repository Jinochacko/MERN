import express from "express";
import PriceunitsController from "../controllers/priceunits.controller.js";

const router = express.Router();

router
  .route("/")
  .get(PriceunitsController.getUnits)
  .post(PriceunitsController.addPriceUnit);

export default router;
