import z from "zod";

export const clubSchema = z.object({
  clubName: z.string().trim().min(5).optional(),
  city: z.string().trim().min(3).optional(),
  country: z.string().trim().min(3).optional(),
  foundedYear: z.number().min(1800).max(2025).optional(),
});
