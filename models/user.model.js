import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    gender: { type: String, enum: ["Male", "Femel"] },
    password: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
