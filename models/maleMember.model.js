import mongoose from "mongoose";

const maleMemberSchema = new mongoose.Schema(
  {
    dl: { type: String },
    bc: { type: String },
    // userId: { type: mongoose.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("MaleMember", maleMemberSchema);
