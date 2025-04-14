import z from "zod";
import mongoose from "mongoose";

export const teamSchema = z.object({
  teamName: z.string().max(100).optional(),
  clubId: z
    .string()
    .refine((val) => {
      return mongoose.Types.ObjectId.isValid(val);
    })
    .optional(),
  groupId: z
    .string()
    .refine((val) => {
      return mongoose.Types.ObjectId.isValid(val);
    })
    .optional(),
  coachName: z.string().max(100).optional(),
});
