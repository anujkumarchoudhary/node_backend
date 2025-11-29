import { dbConnect } from "./utils/db.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import storyRoutes from "./routes/story.route.js";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/users/", userRoutes);
app.use("/story/", storyRoutes);

app.listen(process.env.PORT ?? 5000, async () => {
  await dbConnect();
  console.log(`Server runing on PORT ${process.env.PORT ?? 5000}`);
});
