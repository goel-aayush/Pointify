import express from "express";
import { adduser, getUsers, score } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/getuser", getUsers);
router.post("/adduser", adduser);

router.post("/update-score", score);

export default router;
