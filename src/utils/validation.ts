import {errorMessages} from "../consts";

export interface ValidationRules {
  maxLength?: number;
  allowSpaces?: boolean;
  required?: boolean;
  minLength?: number;
}

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

export function validateInput(
  value: string,
  rules: ValidationRules
): ValidationResult {
  if (rules.required && value === "") {
    return {
      isValid: false,
      errorMessage: errorMessages.required,
    };
  }

  if (!rules.allowSpaces && /\s/.test(value)) {
    return {
      isValid: false,
      errorMessage: errorMessages.allowSpaces,
    };
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return {
      isValid: false,
      errorMessage: errorMessages.maxLength(rules.maxLength),
    };
  }

  if (rules.minLength && value.length < rules.minLength) {
    return {
      isValid: false,
      errorMessage: errorMessages.minLength(rules.minLength),
    };
  }

  return {isValid: true};
}
