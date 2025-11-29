import Story from "../models/story.model.js";

export const createStory = async (req, res) => {
  const { message } = req.body;
  const { id } = req?.user;

  try {
    const story = await Story.findOne({ message });
    if (story) {
      return res.status(409).json({ message: "Already exit" });
    }
    const newStory = new Story({ message, userId: id });
    await newStory.save();
    return res
      .status(201)
      .json({ message: "Story created successfully!", newStory });
  } catch (err) {
    console.log(err);
  }
};
