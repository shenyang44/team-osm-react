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
import ProfTable from "../components/Table";

const Profile = () => {
  return (
    <>
      <h1>My Profile</h1>
      <ProfTable />
      <Button color="danger">Edit Profile</Button>
    </>
  );
};

export default Profile;
