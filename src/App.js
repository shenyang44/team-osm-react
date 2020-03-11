import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Route exact path="/">
        {" "}
        <Login />
        <SignUp />
      </Route>

      <NavLink style={{ color: "#48c5e5" }} tag={Link} to="/home">
        Go Home .
      </NavLink>
      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;