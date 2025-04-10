import {JSX} from "react";
import styles from "./AuthInput.module.css";

interface AuthInputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  errorMessage?: string;
  type?: string;
}

function AuthInput({
  value,
  placeholder,
  onChange,
  onBlur,
  errorMessage,
  type = "text",
}: AuthInputProps): JSX.Element {
  return (
    <div>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
}

export default AuthInput;
