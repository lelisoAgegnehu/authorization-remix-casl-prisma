import CustomErr from "./errorHandler";

export const validate = (field: unknown, schema: any) => {
  const { success, data, error } = schema.safeParse(field);
  const fieldError = error?.flatten().fieldErrors;
  if (!success) {
    const error = "VALIDATION";
    const message = "Validation Error";
    const status = 422;
    throw new CustomErr(error, message, status, fieldError, field);
  }
  return { success, data, field, fieldErrors: fieldError };
};
