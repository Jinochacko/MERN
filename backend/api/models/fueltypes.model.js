import mongoose from "mongoose";

const fueltypesSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export default mongoose.model("Fueltypes", fueltypesSchema);
