import z from "zod";

export const userSchema = z.object({
  name: z.string().trim().min(2),
  phone: z.string().length(10),
  email: z.string().trim().email(),
});
