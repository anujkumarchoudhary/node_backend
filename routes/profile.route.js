import express from "express";
import { createFemelProfile } from "../controllers/profile.controller.js";
import { Auth } from "../middleware/auth.js";
import rateLimit from "express-rate-limit";
const router = express.Router();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 10,
  message: "limit reched, please try after some time!",
});

router.post("/create", createFemelProfile);

export default router;
