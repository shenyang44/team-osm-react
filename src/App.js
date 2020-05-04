import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import NAVBAR from "./components/navbar";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";
import axios from "axios";
import SearchForm from "./components/searchbar";
import { AnimatePresence, motion } from "framer-motion";
import Example from ".//components/carousel";
import Profile from "./pages/ProfilePage";
import Blood from "./components/blood";
import Donate from "./components/donate";
import Contact from "./pages/contact";
import Events from "./pages/Events";
import HOME2 from "./components/Homecard2";
// import NAVBAR2 from "./components/navbar2";

function App() {
  const [usernameValid, setUsernameValid] = useState(true);
  const [email, setEmail] = useState("email");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [bloodTypeInput, setBloodTypeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("jwt"));
  const [number, setNumber] = useState("");

  const successCallback = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setAddress("");
    setBloodType("");
  };

  console.log(localStorage.getItem("jwt"));
  function handleChange(e) {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "username") {
      setUsername(e.target.value);
    } else if (e.target.id === "address") {
      setAddress(e.target.value);
    } else if (e.target.id == "rePass") {
      setConfirmPassword(e.target.value);
    } else if (e.target.id == "number") {
      setNumber(e.target.value);
    } else {
      setBloodType(e.target.value);
    }
  }

  const checkUsername = () => {
    console.log("temporary function");
    // axios
    //   .get(
    //     `https://insta.nextacademy.com/api/v1/users/check_name?username=${username}`
    //   )
    //   .then(response => {
    //     if (response.data.valid) {
    //       setUsernameValid(true);
    //     } else {
    //       setUsernameValid(false);
    //     }
    //   });
  };

  const handleSignUp = () => {
    setEmailInput(email);
    setPasswordInput(password);
    setUsernameInput(username);
    setAddressInput(address);
    setBloodTypeInput(bloodType);
  };

  // User Sign Up
  useEffect(() => {
    if (emailInput !== "" && usernameInput !== "") {
      axios({
        method: "POST",
        url: "https://team-osm.herokuapp.com/api/v1/users/sign-up",
        data: {
          name: usernameInput,
          email: emailInput,
          password: passwordInput,
          number: number,
          address: addressInput,
          bloodType: bloodTypeInput,
        },
      })
        .then((response) => {
          console.log(response);
          localStorage.setItem("jwt", response.data.access_token);
          successCallback();
          setLoggedIn(localStorage.getItem("jwt") !== null);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [emailInput]);

  //Login axios call
  useEffect(() => {
    if (emailInput !== "") {
      axios({
        method: "POST",
        url: "https://team-osm.herokuapp.com/api/v1/users/login",
        data: {
          email: emailInput,
          password: passwordInput,
        },
      })
        .then((response) => {
          console.log(response);
          localStorage.setItem("jwt", response.data.access_token);
          successCallback();
          setLoggedIn(localStorage.getItem("jwt") !== null);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [emailInput]);

  //Logout function
  function logout() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <AnimatePresence>
        <NAVBAR loggedIn={loggedIn} logout={logout} />
        <Route exact path="/">
          <Home />
        </Route>
        <div className="switchh">
          <Switch>
            <Route exact path="/login">
              {loggedIn ? (
                <Redirect to="/profile" />
              ) : (
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
              )}
            </Route>
          </Switch>
        </div>
        <Route path="/profile">
          <Profile loggedIn={loggedIn} />
        </Route>
        <Route path="/SearchForm">
          <SearchForm />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/plans">{/* smtg */}</Route>
        <Route path="/blood">
          <Blood />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/home2">
          <HOME2 />
        </Route>
      </AnimatePresence>
    </div>
  );
}

export default App;
