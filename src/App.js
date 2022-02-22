//import logo from "./logo.svg";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import ExplorationPage from "./pages/GalleryPage";
//import ProfilePage from "./pages/ProfilePage";
//import LoginPage from "./pages/LoginPage";
const App = () => {
  return (
    <div className="App">
      <h1> hi </h1>

      <ExplorationPage />

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">login</Link> | <Link to="/signup">signup</Link>|<Link to="/profile">profile</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default App;
