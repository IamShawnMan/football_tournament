import z from "zod";
import mongoose from "mongoose";

export const groupSchema = z.object({
  groupName: z.string().trim().min(3).optional(),
  tournamentId: z
    .string()
    .refine((val) => {
      return mongoose.Types.ObjectId.isValid(val);
    })
    .optional(),
});
