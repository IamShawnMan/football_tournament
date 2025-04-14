import express from "express";
import { tournamentController } from "../controllers/index.js";
import { tournamentSchema } from "../validations/tournamentValidator.js";
import { validateBody } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router
  .post("/", validateBody(tournamentSchema), tournamentController.create)
  .get("/", tournamentController.getAll)
  .get("/:id", tournamentController.getOne)
  .put("/:id", validateBody(tournamentSchema), tournamentController.edit)
  .delete("/:id", tournamentController.delete);

export default router;
