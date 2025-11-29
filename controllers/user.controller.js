import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../utils/sendMail.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({
      $or: [{ email: email }, { name: name }],
    });
    if (user) {
      return res.status(409).json({ message: "User already exit" });
    }
    const passwordHatched = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: passwordHatched });
    await newUser.save();
    return res
      .status(201)
      .json({ message: "User register successfully!", newUser });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
    console.log(err);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not exit" });
    }
    const matchedPassword = await bcrypt.compare(password, user.password);
    if (!matchedPassword) {
      return res.status({ message: "Invalid credentials" });
    }
    const payload = { id: user?._id, role: user?._role, name: user?._name };
    const token = await jwt.sign(payload, process.env.SECRTE_CODE, {
      expiresIn: "1h",
    });
    return res.status(200).json({ message: "Login successfully!", token });
  } catch (err) {
    console.log(err);
  }
};

export const sendEmailUser = async (req, res) => {
  const data = req.body;
  try {
    const ress = await sendMail(data);
    return res.status(200).json({ message: "OK", ress });
  } catch (err) {
    console.log(err);
  }
};
