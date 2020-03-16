import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Label } from "reactstrap";
import { Link } from "react-router-dom";
import "./Login.css";
// import SignUp from "./components/Signup";
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

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransit}
      className="Login"
    >
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <Label className="maillabel">Email</Label>
          <FormControl
            className="logininput"
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <Label className="passlabel">Password</Label>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button
          variant="danger"
          className="btnlogin"
          block
          bsSize="large"
          disabled={!validateForm()}
          type="submit"
        >
          Login
        </Button>
      </form>
    </motion.div>
  );
};

export default Login;
