import mongoose from "mongoose";

const PlacesSchema = new mongoose.Schema({
  place: { type: String, required: true },
  likes: { type: Number, required: true },
}, { timestamps: true });

// ensures schema is only exported once
const Places =  mongoose.models.Places || mongoose.model("Places", PlacesSchema);
export default Places;