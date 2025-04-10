import {useState} from "react";
import {validationRules} from "../consts";
import {validateInput} from "../utils/validation";

export const useValidation = () => {
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  
  const validateField = (value: string, fieldName: "room" | "username") => {
    const result = validateInput(value, validationRules[fieldName]);
    setErrors((prev) => ({
      ...prev,
      [fieldName]: result.isValid ? undefined : result.errorMessage,
    }));
  };

  const isValid = () => Object.values(errors).every((error) => !error)

  return {validateField, errors, isValid};
};
