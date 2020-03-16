import React from "react";
import {
  Form,
  Label,
  Input,
  Button,
  FormFeedback,
  FormGroup
} from "reactstrap";
import "./Signup.css";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const pageTransit = {
  in: {
    opacity: 1,
    x: 0
  },
  out: {
    opacity: 0,
    x: "-100%"
  }
};

const SignUp = ({
  email,
  usernameValid,
  checkUsername,
  handleChange,
  handleSignUp,
  username,
  address,
  password,
  confirmPassword
}) => {
  const toastSettings = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  };

  const handleSubmit = e => {
    e.preventDefault();
    // if (!email || !username || !password || !confirmPassword) {
    //   return toast.error("All fields must be filled!", toastSettings);
    // }

    // if (password.length < 8) {
    //   return toast.error("Password is too short!", toastSettings);
    // }

    // if (password !== confirmPassword) {
    //   return toast.error("Passwords are not matching!", toastSettings);
    // }

    // if (username.length <= 6) {
    //   return toast.error("Username is too short!", toastSettings);
    // }

    // if (!usernameValid) {
    //   return toast.error("Username is invalid, please check!", toastSettings);
    // }
  };

  // const getInputProp = () => {
  //   if (!username.length) {
  //     return null;
  //   }
  //   if (username.length <= 6) {
  //     return { invalid: true };
  //   }

  //   if (usernameValid) {
  //     return { valid: true };
  //   } else {
  //     return { invalid: true };
  //   }
  // };

  // const getFormFeedback = () => {
  //   if (!username.length) {
  //     return null;
  //   }

  //   if (username.length <= 6) {
  //     return <FormFeedback invalid>Must be at least 6 characters</FormFeedback>;
  //   }

  //   if (usernameValid) {
  //     return <FormFeedback valid>Sweet! That name is available</FormFeedback>;
  //   } else {
  //     return <FormFeedback invalid>Sorry! Username is taken</FormFeedback>;
  //   }
  // };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransit}
      className="signupmenu"
    >
      <Form className="signup" onSubmit={handleSubmit}>
        <div>
          {" "}
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="...@email.com"
              value={email}
              onChange={handleChange}
              id="email"
            />
          </FormGroup>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="min 6 characters"
              value={username}
              onChange={checkUsername}
              id="username"
              // {...getInputProp()}
            />
            {/* {getFormFeedback()} */}
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="min 6 characters"
              value={password}
              onChange={handleChange}
              id="password"
            />
          </FormGroup>
          <FormGroup>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              placeholder="Retype Password"
              value={confirmPassword}
              onChange={handleChange}
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
              value={address}
              onChange={handleChange}
              id="address"
            />
          </FormGroup>
          <FormGroup>
            <Label>Blood Group</Label>
            <p>Optional*</p>
            <br />
            <div className="bloodgrp">
              <div>
                <Input type="radio" id="A+" name="bloodgroup" value="A+" />
                <Label for="A+">A+</Label>
              </div>
              <div>
                <Input type="radio" id="B+" name="bloodgroup" value="B+" />
                <Label for="B+">B+</Label>
              </div>
              <div>
                <Input type="radio" id="AB+" name="bloodgroup" value="AB+" />
                <Label for="AB+">AB+</Label>
              </div>
              <div>
                <Input type="radio" id="O+" name="bloodgroup" value="O+" />
                <Label for="O+">O+</Label>
              </div>
            </div>
            <div className="bloodgrp">
              <div>
                <Input type="radio" id="A-" name="bloodgroup" value="A-" />
                <Label for="A-">A-</Label>
              </div>
              <div>
                <Input type="radio" id="B-" name="bloodgroup" value="B-" />
                <Label for="B-">B-</Label>
              </div>
              <div>
                <Input type="radio" id="AB-" name="bloodgroup" value="AB-" />
                <Label for="AB-">AB-</Label>
              </div>
              <div>
                <Input type="radio" id="O-" name="bloodgroup" value="O-" />
                <Label for="O-">O-</Label>
              </div>
            </div>
            <div>
              <Input
                type="radio"
                id="Unsure"
                name="bloodgroup"
                value="Unsure"
              />
              <Label for="Unsure">Unsure</Label>
            </div>
          </FormGroup>
        </div>
        <div className="signupbtn">
          <Button color="danger" block onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
      </Form>
    </motion.div>
  );
};

export default SignUp;
