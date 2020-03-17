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
import { Table } from "reactstrap";
import TABLE from "../components/Table";

const PROFILE = () => {
  return (
    <>
      <h1>My Profile</h1>
      <TABLE />
      <Button color="danger">Edit Profile</Button>
    </>
  );
};

export default PROFILE;
