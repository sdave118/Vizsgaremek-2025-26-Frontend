export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

export const isNonEmpty = (v: string) => v.trim().length > 0;
export const isEmail = (v: string) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    v.trim(),
  );
export const isMinLength = (v: string, len = 6) => v.length >= len;
export const isValidIsoDate = (v: string) => {
  if (!v || v === "yyyy-mm-dd") return false;
  const t = Date.parse(v);
  return !Number.isNaN(t);
};

import type { UserDetailsType } from "../context/UserSignUpContext";
export const validateUserDetails = (
  d: UserDetailsType,
): {
  isValid: boolean;
  errors: ValidationErrors<UserDetailsType>;
} => {
  const errors: ValidationErrors<UserDetailsType> = {};

  if (!isNonEmpty(d.firstName)) errors.firstName = "First name is required";
  if (!isNonEmpty(d.lastName)) errors.lastName = "Last name is required";
  if (!isEmail(d.email)) errors.email = "Enter a valid email address";
  if (!isMinLength(d.password, 6))
    errors.password =
      "Contain min. 8 characters, one uppercase letter,one lowercase letter, one number and one special character";
  if (!d.gender) errors.gender = "Please select a gender";
  if (!isValidIsoDate(d.birthDate))
    errors.birthDate = "Please enter a valid birth date";

  return { isValid: Object.keys(errors).length === 0, errors };
};
