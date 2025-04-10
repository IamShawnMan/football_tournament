import express from "express";
import {
  createClub,
  deleteClub,
  editClub,
  getAllClubs,
  getClubById,
} from "../controllers/index.js";

const router = express.Router();

router
  .post("/", createClub)
  .get("/", getAllClubs)
  .get("/:id", getClubById)
  .delete("/:id", deleteClub)
  .put("/:id", editClub);

export default router;
