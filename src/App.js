import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";
import { NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import FAQ from "./pages/faq";

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
      </Switch>

      <NavLink style={{ color: "#48c5e5" }} tag={Link} to="/home">
        Go Home .
      </NavLink>
    </div>
  );
}

export default App;
