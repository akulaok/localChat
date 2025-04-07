import {JSX, useState} from "react";
import styles from "./Login.module.css";

interface LoginProps {
  onLogin: (username: string, room: string) => void;
}

function Login({onLogin}: LoginProps): JSX.Element {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const isUsernameTooLong = username.length > 30;
  const isRoomTooLong = room.length > 30;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isUsernameTooLong && !isRoomTooLong) {
      onLogin(username, room);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.auth}>
        <h1 className={styles.title}>Войти в чат</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Имя пользователя"
          />
          {isUsernameTooLong && (
            <span className={styles.error}>Имя слишком длинное</span>
          )}

          <input
            className={styles.input}
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Название комнаты"
          />
          {isRoomTooLong && (
            <span className={styles.error}>Название слишком длинное</span>
          )}

          <button className={styles.button} type="submit">
            Войти
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
