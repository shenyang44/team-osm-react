import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import ControlledCarousel from "./components/Home";
import Login from "./components/Login";
import { NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        {" "}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Login />
        <NavLink style={{ color: "#48c5e5" }} tag={Link} to="/home">
          Go Home .
        </NavLink>
      </Route>

      <Route path="/signUp" render={() => <SignUp isAuthed={true} />} />

      <Route path="/home">
        <ControlledCarousel />
      </Route>
    </div>
  );
}

export default App;
