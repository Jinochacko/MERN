import mongoose from "mongoose";

const priceunitsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
});

export default mongoose.model("Priceunits", priceunitsSchema);
