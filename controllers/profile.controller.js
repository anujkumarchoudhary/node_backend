import FemelMember from "../models/femelMember.model.js";

export const createFemelProfile = async (req, res) => {
  const { dl, bc } = req.body;
  // const { id } = req?.user;

  try {
    const story = await FemelMember.findOne({ dl });
    if (story) {
      return res.status(409).json({ message: "Already exit" });
    }
    const newStory = new FemelMember({ dl, bc });
    await newStory.save();
    return res.status(201).json({ message: "Created successfully!", newStory });
  } catch (err) {
    console.log(err);
  }
};
