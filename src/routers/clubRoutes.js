import express from "express";
import {
  createClub,
  deleteClub,
  editClub,
  getAllClubs,
  getClubById,
} from "../controllers/index.js";
import { clubSchema } from "../validations/clubValidation.js";
import { validateBody } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router
  .post("/", validateBody(clubSchema), createClub)
  .get("/", getAllClubs)
  .get("/:id", getClubById)
  .delete("/:id", deleteClub)
  .put("/:id", validateBody(clubSchema), editClub);

export default router;
