import express from "express";
import cors from "cors";
import vehicles from "./api/routers/vehicles.router.js";
import currency from "./api/routers/currency.router.js";
import priceunits from "./api/routers/priceunits.router.js";
import manufactures from "./api/routers/manufactures.router.js";
import fueltypes from "./api/routers/fueltypes.router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/vehiculo/vehicles", vehicles);
app.use("/api/vehiculo/currency", currency);
app.use("/api/vehiculo/priceunits", priceunits);
app.use("/api/vehiculo/manufactures", manufactures);
app.use("/api/vehiculo/fueltypes", fueltypes);
app.use("*", (_req, res) => res.status(404).json("Oh no, it is not here..."));

export default app;
