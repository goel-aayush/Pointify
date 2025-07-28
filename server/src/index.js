import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
// import { app, server } from "./lib/socket.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
  connectDB();
});
