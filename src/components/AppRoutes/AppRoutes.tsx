import {useContext} from "react";
import {AppRoute} from "../../consts";
import ChatPage from "../../pages/ChatPage/ChatPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import {Route, Routes, Navigate} from "react-router-dom";
import {StorageContext} from "../../contexts/StorageContext";
import {observer} from "mobx-react";

function AppRoutes() {
  const {userSession} = useContext(StorageContext);
  const {userName, room} = userSession;

  return (
    <Routes>
      <Route path={AppRoute.Login} element={<LoginPage />} />
      <Route
        path={AppRoute.Chat}
        element={
          userName && room ? (
            <ChatPage />
          ) : (
            <Navigate to={AppRoute.Login} replace />
          )
        }
      />
      <Route path="*" element={<Navigate to={AppRoute.Login} replace />} />
    </Routes>
  );
}

export default observer(AppRoutes);
