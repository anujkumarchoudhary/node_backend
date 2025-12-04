import express from "express";
import { createOrder } from "../controllers/patmeny.controller.js";
import { Auth } from "../middleware/auth.js";
const router = express.Router();

router.post("/create", createOrder);

export default router;
