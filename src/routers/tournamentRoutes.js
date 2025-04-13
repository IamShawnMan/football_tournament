import express from "express";
import { tournamentController } from "../controllers/index.js";

const router = express.Router();

router
  .post("/", tournamentController.create)
  .get("/", tournamentController.getAll)
  .get("/:id", tournamentController.getOne)
  .put("/:id", tournamentController.edit)
  .delete("/:id", tournamentController.delete);

export default router;
