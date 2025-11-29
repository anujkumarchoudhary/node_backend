import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    message: { type: String },
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Story", storySchema);
