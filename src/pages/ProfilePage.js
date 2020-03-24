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
    <div className="container" center>
      <h1>My Profile</h1>
      <ProfTable />
      <div className="btncontainer" center>
        <Button color="danger">Edit Profile</Button>
      </div>
    </div>
  );
};

export default Profile;
