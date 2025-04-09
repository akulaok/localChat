import {useEffect, useState} from "react";
import "./App.css";
import {onLogin} from "./utils/authSrorage";
import Chat from "./pages/ChatPage/ChatPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {AppRoute} from "./consts";
import Login from "./pages/LoginPage/LoginPage";

function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [room, setRoom] = useState<string | null>(null);

  useEffect(() => {
    const savedSession = localStorage.getItem("chat-session");
    if (savedSession) {
      const parsed = JSON.parse(savedSession);
      setUsername(parsed.username);
      setRoom(parsed.room);
    }
  }, []);

  console.log(username, room);

  return (
    <Router>
      <Routes>
        <Route
          path={AppRoute.Login}
          element={
            <Login
              onLogin={(user, roomName) =>
                onLogin(user, roomName, setUsername, setRoom)
              }
            />
          }
        />
        <Route
          path={AppRoute.Chat}
          element={
            username && room ? (
              <Chat username={username} room={room}></Chat>
            ) : (
              <Navigate to={AppRoute.Login} replace />
            )
          }
        />
        <Route path="*" element={<Navigate to={AppRoute.Login} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
