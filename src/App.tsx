import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import {StorageProvider} from "./contexts/StorageProvider";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <StorageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </StorageProvider>
  );
}

export default App;
