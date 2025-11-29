import express from "express";
import { createUser, loginUser, sendEmailUser } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.post("/send", sendEmailUser);


export default router;
