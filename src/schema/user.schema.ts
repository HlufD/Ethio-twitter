import { z } from "zod";

export const userSchema = z.object({
  email: z
    .string({ required_error: "name is required" })
    .email({ message: "Invalid email address" }),
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name can oly be String",
    })
    .min(3),
  password: z.string({ required_error: "name is required" }).min(6, {
    message: "password must be at least 5 char or more characters long",
  }),
});
