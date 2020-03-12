import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";
import { NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import FAQ from "./components/faq";
import { NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Authorization />
        </Route>

        <Route path="/faq">
          <FAQ />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/SearchForm">
          <SearchForm />
        </Route>
      </Switch>

      <NavLink style={{ color: "#48c5e5" }} tag={Link} to="/home">
        Go Home .
      </NavLink>
    </div>
  );
}

export default App;

// for now, navlink serve to navigate direct to home without logging in
/* "go home" link will be gone when login works  */
