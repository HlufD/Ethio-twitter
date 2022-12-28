import { Response, Request } from "express";

export const validateUser = (body: object | string, schema: any) => {
  let validation = schema.safeParse(body);
  if (!validation.success) {
    return {
      success: false,
      message: validation.error.errors[0]["message"],
    };
  }
  return { success: true };
};
