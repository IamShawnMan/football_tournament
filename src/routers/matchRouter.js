import express from "express";
import { matchController } from "../controllers/index.js";
import { matchSchema } from "../validations/matchValidator.js";
import { validateBody } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router
  .post("/", validateBody(matchSchema), matchController.create)
  .get("/", matchController.getAll)
  .get("/:id", matchController.getOne)
  .put("/:id", validateBody(matchSchema), matchController.edit)
  .delete("/:id", matchController.delete);

export default router;
