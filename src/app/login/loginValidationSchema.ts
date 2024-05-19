import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string().email("Invalid email").max(255),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
