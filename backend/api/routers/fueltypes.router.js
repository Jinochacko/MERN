import express from "express";
import FueltypesController from "../controllers/fueltypes.controller.js";

const router = express.Router();

router
  .route("/")
  .get(FueltypesController.getFueltypes)
  .post(FueltypesController.addFueltypes);

export default router;
