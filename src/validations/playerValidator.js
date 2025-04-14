import z from "zod";
import mongoose from "mongoose";

export const playerSchema = z.object({
  fullName: z.string().max(100).optional(),
  dateOfBirth: z.date().optional(),
  position: z.string().max(50).optional(),
  teamId: z.string().refine((val) => {
    return mongoose.Types.ObjectId.isValid(val);
  }),
  jerseyNumber: z.number().optional(),
});
