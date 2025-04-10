import {JSX, useState} from "react";
import styles from "./LoginPage.module.css";
import {useNavigate} from "react-router-dom";
import {AppRoute} from "../../consts";
import AuthInput from "../../components/AuthInput/AuthInput";
import {useValidation} from "../../hooks/useValidation";

interface LoginPageProps {
  onLogin: (username: string, room: string) => void;
}

function LoginPage({onLogin}: LoginPageProps): JSX.Element {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();
  const {validateField, errors, isValid} = useValidation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    validateField(username, "username");
    validateField(room, "room");
    if (!isValid()) {
      return;
    }

    onLogin(username, room);
    navigate(AppRoute.Chat);
  };

  return (
    <main className={styles.main}>
      <div className={styles.auth}>
        <h1 className={styles.title}>Войти в чат</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <AuthInput
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder={"Логин"}
            onBlur={() => validateField(username, "username")}
            errorMessage={errors.username}
          />
          <AuthInput
            onChange={(e) => setRoom(e.target.value)}
            value={room}
            placeholder={"Название комнаты"}
            onBlur={() => validateField(room, "room")}
            errorMessage={errors.room}
          />
          <button className={styles.button} type="submit">
            Войти
          </button>
        </form>
      </div>
    </main>
  );
}

export default LoginPage;
