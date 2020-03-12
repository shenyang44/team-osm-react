import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  Label,
  Input,
  Button,
  FormFeedback,
  FormGroup
} from "reactstrap";
import { toast } from "react-toastify";
// import { Link } from "react-router-dom";
import "./Signup.css";

const SignUp = ({ signUpUser, toggle }) => {
  const [delay, setDelay] = useState(null);
  const [usernameValid, setUsernameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const successCallback = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    toggle();
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !username || !password || !confirmPassword) {
      return toast.error("All fields must be filled!", toastSettings);
    }

    if (password.length < 8) {
      return toast.error("Password is too short!", toastSettings);
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords are not matching!", toastSettings);
    }

    if (username.length <= 6) {
      return toast.error("Username is too short!", toastSettings);
    }

    if (!usernameValid) {
      return toast.error("Username is invalid, please check!", toastSettings);
    }

    signUpUser(username, email, password, successCallback);
  };

  const checkUsername = newUsername => {
    axios
      .get(
        `https://insta.nextacademy.com/api/v1/users/check_name?username=${newUsername}`
      )
      .then(response => {
        if (response.data.valid) {
          setUsernameValid(true);
        } else {
          setUsernameValid(false);
        }
      });
  };

  const handleUsernameInput = e => {
    clearTimeout(delay);
    const newUsername = e.target.value;
    setUsername(newUsername);

    const newDelay = setTimeout(() => {
      checkUsername(newUsername);
    }, 500);

    setDelay(newDelay);
  };

  const getInputProp = () => {
    if (!username.length) {
      return null;
    }

    if (username.length <= 6) {
      return { invalid: true };
    }

    if (usernameValid) {
      return { valid: true };
    } else {
      return { invalid: true };
    }
  };

  const getFormFeedback = () => {
    if (!username.length) {
      return null;
    }

    if (username.length <= 6) {
      return <FormFeedback invalid>Must be at least 6 characters</FormFeedback>;
    }

    if (usernameValid) {
      return <FormFeedback valid>Sweet! That name is available</FormFeedback>;
    } else {
      return <FormFeedback invalid>Sorry! Username is taken</FormFeedback>;
    }
  };

  return (
    <div className="signupmenu">
      <Form classname="signup" onSubmit={handleSubmit}>
        <div>
          {" "}
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="...@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="min 6 characters"
              value={username}
              onChange={e => handleUsernameInput(e)}
              {...getInputProp()}
            />
            {getFormFeedback()}
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="min 6 characters"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="Retype Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <Label>Address</Label>
            <br />
            <Input
              type="Address"
              placeholder="Address"
              //   value={confirmPassword}
              //   onChange={e => setConfirmPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            {/* action="/action_page.php" */}
            <Label>Blood Group</Label>
            <br />
            <Input type="radio" id="A" name="bloodgroup" value="A" />
            <Label for="A">A</Label>

            <Input type="radio" id="B" name="bloodgroup" value="B" />
            <Label for="B">B</Label>

            <Input type="radio" id="AB" name="bloodgroup" value="AB" />
            <Label for="AB">AB</Label>

            <Input type="radio" id="O" name="bloodgroup" value="O" />
            <Label for="O">O</Label>

            <Input type="radio" id="Unsure" name="bloodgroup" value="Unsure" />
            <Label for="Unsure">Unsure</Label>
          </FormGroup>
        </div>

        <Button outline color="danger">
          Sign Up
        </Button>
        {/* <h1>Already a Member?</h1> <Link to="/login">Login</Link> */}
      </Form>
    </div>
  );
};

const toastSettings = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

export default SignUp;
