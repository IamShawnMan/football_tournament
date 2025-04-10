import express from "express";
import { createClub } from "../controllers/index.js";

const router = express.Router();

router.post("/", createClub);

export default router;
