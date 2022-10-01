import mongoose from "mongoose";

const now = new Date();

const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: Number,
  variant: String,
  price: {
    mrp: { type: Number, required: true },
    unit: {
      name: { type: String, required: true },
      code: { type: String, required: true },
    },
    minPrice: Number,
    discount: Number,
    discountType: String, // Amount or Percentage,
    currency: { type: String, required: true, default: "Rupees" },
    currencySymbol: { type: String, required: true, default: "₹" },
  },
  fuel: {
    type: { type: String, required: true },
    efficiency: Number,
    efficiencyUnit: String,
  },
  milage: { value: Number, unit: String },
  manufacturer: {
    name: { type: String, required: true },
    country: { type: String, default: "India" },
  },
  images: { type: [String], required: true },
  createdAt: { type: Date, default: now },
  updatedAt: { type: Date, default: now },
});

export default mongoose.model("Vehicles", vehicleSchema);
