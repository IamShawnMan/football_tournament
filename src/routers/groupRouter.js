import express from "express";
import { groupController } from "../controllers/index.js";
import { groupSchema } from "../validations/groupValidator.js";
import { validateBody } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router
  .post("/", validateBody(groupSchema), groupController.create)
  .get("/", groupController.getAll)
  .get("/:id", groupController.getOne)
  .put("/:id", validateBody(groupSchema), groupController.edit)
  .delete("/:id", groupController.delete);

export default router;
