import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Label,
  Input,
  Button,
  FormFeedback,
  FormGroup
} from "reactstrap";
import TABLE from "../components/Profile";

const PROFILE = () => {
  return (
    <>
      <h1>My Profile</h1>
      <div>
        <TABLE />
      </div>
      <br />
      <Button color="danger">Edit Profile</Button>
    </>
  );
};

export default PROFILE;
