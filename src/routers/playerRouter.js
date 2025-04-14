import express from "express";
import { playerController } from "../controllers/index.js";

const router = express.Router();

router
  .post("/", playerController.create)
  .get("/", playerController.getAll)
  .get("/:id", playerController.getOne)
  .put("/:id", playerController.edit)
  .delete("/:id", playerController.delete);

export default router;
