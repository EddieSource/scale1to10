//import logo from "./logo.svg";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import ExplorationPage from "./pages/GalleryPage";
import Grid from "@mui/material/Grid";

import PrimarySearchAppBar from "./components/NavBar";

//import ProfilePage from "./pages/ProfilePage";
//import LoginPage from "./pages/LoginPage";
const App = () => {
  return (
    <div className="App">
      <PrimarySearchAppBar />

      <Outlet />
    </div>
  );
};

export default App;
