import logo from "./logo.svg";
import LoginPage from "./pages/LoginPage";
import { Link, Outlet } from "react-router-dom";
import "./App.css";
import ExplorationPage from "./pages/GalleryPage";
import Grid from "@mui/material/Grid";

const App = () => {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1> navbar </h1>
        </Grid>
        <Grid item xs={4}>
          <Link to="/login">login</Link> | <Link to="/signup">signup</Link> |{" "}
          <Link to="/profile">profile</Link>
        </Grid>
      </Grid>
      <ExplorationPage />

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      ></nav>

      <Outlet />
    </div>
  );
};

export default App;
