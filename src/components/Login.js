import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Label } from "reactstrap";
import { Link } from "react-router-dom";
import "./Login.css";
// import SignUp from "./components/Signup";

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
    <div className="Login">
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
      {/* <div className="alte row">
        <p>New Member? </p>{" "}
        <Link className="newmem" to="/signUp">
          Sign Up
        </Link>
      </div> */}
    </div>
  );
};

export default Login;
