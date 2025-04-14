import express from "express";
import { matchController } from "../controllers/index.js";

const router = express.Router();

router
  .post("/", matchController.create)
  .get("/", matchController.getAll)
  .get("/:id", matchController.getOne)
  .put("/:id", matchController.edit)
  .delete("/:id", matchController.delete);

export default router;
