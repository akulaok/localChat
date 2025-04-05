import {JSX, useState} from "react";
import styles from "./Login.module.css";

interface LoginProps {
  onLogin: (username: string, room: string) => void;
}

function Login({onLogin}: LoginProps): JSX.Element {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <main className={styles.main}>
      <div className={styles.auth}>
        <h1 className={styles.title}>Войти в чат</h1>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            onLogin(username, room);
          }}
        >
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="login"
          />
          <input
            className={styles.input}
            type="text"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Название комнаты"
          />
          <button className={styles.button} type="submit">
            Войти
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
