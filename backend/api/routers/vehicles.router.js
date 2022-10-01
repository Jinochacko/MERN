import express from "express";
import VehiclesController from "../controllers/vehicles.controller.js";

const router = express.Router();

router
  .route("/")
  .get(VehiclesController.getVehicles)
  .post(VehiclesController.addVehicle)
  .delete(VehiclesController.deleteVehicle);

export default router;
