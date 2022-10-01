import express from "express";
import CurrencyController from "../controllers/currency.controller.js";

const router = express.Router();

router
  .route("/")
  .get(CurrencyController.getCurrencies)
  .post(CurrencyController.addCurrency);

export default router;
