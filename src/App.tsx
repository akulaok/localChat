import "./App.css";
import Chat from "./pages/ChatPage/ChatPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {AppRoute} from "./consts";
import Login from "./pages/LoginPage/LoginPage";
import {useSession} from "./hooks/useSession ";

function App() {
  const {username, room, login} = useSession();

  return (
    <Router>
      <Routes>
        <Route path={AppRoute.Login} element={<Login onLogin={login} />} />
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
