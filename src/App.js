import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import { NavItem, NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go home
        </a> */}
        <NavItem>
          <NavLink style={{ color: "#48c5e5" }} tag={Link} to="/home">
            Go Home
          </NavLink>
        </NavItem>
      </header>
      <Route path="/home">
        <Home />
      </Route>
    </div>
  );
}

export default App;
