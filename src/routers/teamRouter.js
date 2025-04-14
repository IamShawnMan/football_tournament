import express from "express";
import { teamController } from "../controllers/index.js";

const router = express.Router();

router
  .post("/", teamController.create)
  .get("/", teamController.getAll)
  .get("/:id", teamController.getOne)
  .put("/:id", teamController.edit)
  .delete("/:id", teamController.delete);

export default router;
