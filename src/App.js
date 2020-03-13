import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NAVBAR from "./components/navbar";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";
import { NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import FAQ from "./pages/faq";
import axios from "axios";
import SearchForm from "./components/searchbar";
import Login from "./components/Login";

function App() {
  const [usernameValid, setUsernameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");

  const successCallback = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setAddress("");
  };

  function handleChange(e) {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "address") {
      setAddress(e.target.value);
    }
  }

  const checkUsername = () => {
    axios
      .get(
        `https://insta.nextacademy.com/api/v1/users/check_name?username=${username}`
      )
      .then(response => {
        if (response.data.valid) {
          setUsernameValid(true);
        } else {
          setUsernameValid(false);
        }
      });
  };

  const handleSignUp = () => {
    console.log("hello");
    setEmailInput(email);
    setPasswordInput(password);
    setUsernameInput(username);
    setAddressInput(address);
  };

  useEffect(() => {
    axios({
      method: "POST",
      url: "",
      data: {
        name: usernameInput,
        email: emailInput,
        password: passwordInput,
        number: 1212345,
        address: addressInput
      }
    })
      .then(response => {
        console.log(response);
        localStorage.setItem("jwt", response.data.access_token);
        successCallback();
      })
      .catch(error => {
        console.error(error);
      });
  }, [emailInput]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Authorization
            usernameValid={usernameValid}
            checkUsername={checkUsername}
            password={password}
            address={address}
            username={username}
            email={email}
            confirmPassword={confirmPassword}
            handleSignUp={handleSignUp}
            handleChange={handleChange}
          />
        </Route>
        <Route path="/bleed">
          <Login />
        </Route>

        <Route path="/faq">
          <FAQ />
        </Route>

        <Route path="/SearchForm">
          <SearchForm />
        </Route>
      </Switch>

      <NavLink style={{ color: "#bb2734" }} tag={Link} to="/home">
        Go Home .
      </NavLink>
    </div>
  );
}

export default App;

// for now, navlink serve to navigate direct to home without logging in
/* "go home" link will be gone when login works  */
