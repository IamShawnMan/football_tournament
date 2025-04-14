import express from "express";
import { groupController } from "../controllers/index.js";

const router = express.Router();

router
  .post("/", groupController.create)
  .get("/", groupController.getAll)
  .get("/:id", groupController.getOne)
  .put("/:id", groupController.edit)
  .delete("/:id", groupController.delete);

export default router;
