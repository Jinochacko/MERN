import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
  type: { type: String, required: true },
  symbol: { type: String, required: true },
});

export default mongoose.model("Currency", currencySchema);
