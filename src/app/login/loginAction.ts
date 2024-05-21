"use server";
import { loginValidationSchema } from "./loginValidationSchema";

interface LoginErrors {
  errors?: {
    email?: string[];
    password?: string[];
  };
  success: boolean;
}

export const login = async (
  _: LoginErrors,
  formData: FormData,
): Promise<LoginErrors> => {
  const email = formData.get("email")?.valueOf();
  const password = formData.get("password")?.valueOf();

  const result = loginValidationSchema.safeParse({ email, password });

  console.log({ result: JSON.stringify(result), email, password });

  if (result.success) {
    return { success: true };
  }

  return {
    success: false,
    errors: result.error.flatten().fieldErrors,
  };
};
