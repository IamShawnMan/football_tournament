import z from "zod";
import mongoose from "mongoose";

export const matchSchema = z.object({
  matchDate: z.date().optional(),
  venue: z.string().max(200).optional(),
  homeTeamId: z
    .string()
    .refine((val) => {
      return mongoose.Types.ObjectId.isValid(val);
    })
    .optional(),
  awayTeamId: z
    .string()
    .refine((val) => {
      return mongoose.Types.ObjectId.isValid(val);
    })
    .optional(),
  homeScore: z.number().default(0).optional(),
  awayScore: z.number().default(0).optional(),
  tournamentId: z
    .string()
    .refine((val) => {
      return mongoose.Types.ObjectId.isValid(val);
    })
    .optional(),
  matchStatus: z.string().max(20).default("scheduled").optional(),
});
