import mongoose from "mongoose";

const manufacturesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
});

export default mongoose.model("Manufactures", manufacturesSchema);
