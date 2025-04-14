import express from "express";
import { playerController } from "../controllers/index.js";
import { playerSchema } from "../validations/playerValidator.js";
import { validateBody } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router
  .post("/", validateBody(playerSchema), playerController.create)
  .get("/", playerController.getAll)
  .get("/:id", playerController.getOne)
  .put("/:id", validateBody(playerSchema), playerController.edit)
  .delete("/:id", playerController.delete);

export default router;
