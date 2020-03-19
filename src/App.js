import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NAVBAR from "./components/navbar";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";
import { NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import FAQ from "./pages/faq";
import axios from "axios";
import SearchForm from "./components/searchbar";
import Login from "./components/Login";
import PROFILE from "./pages/ProfilePage";
import { AnimatePresence, motion } from "framer-motion";
import User from "./components/Profile";
import TABLE from "./components/Table";


function App() {
  const [usernameValid, setUsernameValid] = useState(true);
  const [email, setEmail] = useState("email");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [bloodType, setBloodType] = useState('')
  const [bloodTypeInput, setBloodTypeInput] = useState('')
  const [emailInput, setEmailInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwt'))

  const successCallback = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setAddress("");
    setBloodType('')
  };

  function handleChange(e) {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
    else if (e.target.id === "username") {
      setUsername(e.target.value);
    }
    else if (e.target.id === "address") {
      setAddress(e.target.value);
    }
    else {
      setBloodType(e.target.value)
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
    console.log('working');
    setEmailInput(email);
    setPasswordInput(password);
    setUsernameInput(username);
    setAddressInput(address);
    setBloodTypeInput(bloodType)
  };

  // User Sign Up
  useEffect(() => {
    if (emailInput !== '') {
      axios({
        method: "POST",
        url: "https://team-osm.herokuapp.com/api/v1/users/sign-up",
        data: {
          name: usernameInput,
          email: emailInput,
          password: passwordInput,
          number: 123123123,
          address: addressInput,
          bloodType: bloodTypeInput
        }
      })
        .then(response => {
          console.log(response);
          localStorage.setItem("jwt", response.data.access_token);
          successCallback();
          setLoggedIn(localStorage.getItem('jwt') !== null)
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [emailInput]);

  useEffect(() => {
    console.log(localStorage.getItem('jwt'))
    console.log(loggedIn)
  }, [loggedIn])
  return (
    <div className="App">
      <AnimatePresence>
        <NAVBAR />
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/user">
         
              {/* <Route exact path="/"> */}
        <div className="switchh">
          <Switch>
            <Route exact path="/login">
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
              {/* </Route> */}
            </Switch>
          </div>
        </Route>
        <Route path="/bleed">
          <Login />
        </Route>
        <Route path="/me">
          <User />
        </Route>
        <Route path="/SearchForm">
          <SearchForm />
        </Route>
        <Route path="/faq">
          <FAQ />
        </Route>
        <Route path="/me">
          <TABLE />
        </Route>
      </AnimatePresence>
    </div>
  );
}

export default App;
