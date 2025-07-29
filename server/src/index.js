// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";

// import { connectDB } from "./lib/db.js";
// import userRoutes from "./routes/user.route.js";
// import { app, server } from "./lib/socket.js";
// dotenv.config();
// // const app = express();

// const PORT = process.env.PORT;

// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// app.use("/api/user", userRoutes);

// server.listen(PORT, () => {
//   console.log(`server is running on ${PORT}`);
//   connectDB();
// });
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import userRoutes from "./routes/user.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;

// CORS setup to allow multiple origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://pointify-clinet.vercel.app",
];

app.use(express.json());

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Routes
app.use("/api/user", userRoutes);

// Server start
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
