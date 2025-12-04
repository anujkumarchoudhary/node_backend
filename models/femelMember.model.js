import mongoose from "mongoose";

const femelMemberSchema = new mongoose.Schema(
  {
    dl: { type: String },
    bc: { type: String },
    // userId: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("FemelMember", femelMemberSchema);
