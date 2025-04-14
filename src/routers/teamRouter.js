import express from "express";
import { teamController } from "../controllers/index.js";
import { teamSchema } from "../validations/teamValidator.js";
import { validateBody } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router
  .post("/", validateBody(teamSchema), teamController.create)
  .get("/", teamController.getAll)
  .get("/:id", teamController.getOne)
  .put("/:id", validateBody(teamSchema), teamController.edit)
  .delete("/:id", teamController.delete);

export default router;
