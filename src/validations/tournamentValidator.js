import z from "zod";
import mongoose from "mongoose";

export const tournamentSchema = z.object({
  tournamentName: z.string().max(100).optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  status: z.string().default("upcoming").max(50).optional(),
});
