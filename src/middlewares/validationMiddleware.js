import { ZodError } from "zod";
import { StatusCodes } from "http-status-codes";

export function validateBody(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.errors.map((issue) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        res.status(StatusCodes.BAD_REQUEST).json({
          error: "Invalid data",
          details: errorMessage,
        });
      } else {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ error: "Internal server error" });
      }
    }
  };
}

// export function validateParams(schema) {
//   return (req, res, next) => {
//     schema
//     try {
//     } catch (error) {}
//   };
// }
