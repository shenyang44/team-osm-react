import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button, Nav, Form, NavDropdown, FormControl } from "react-bootstrap";
import "./navbar.css";
import { motion } from "framer-motion";
import { NavLink } from "reactstrap";
import { NavLink as Link } from "react-router-dom";

const pageTransit = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const NAVBAR = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransit}>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="/home">Blardy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>

          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="outline-danger">
              <NavLink tag={Link} to="/profile">
                Profile
              </NavLink>
            </Button>
          </Form>
          <Form inline>
            <Button variant="outline-danger">
              <NavLink tag={Link} to="/login">
                Login
              </NavLink>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default NAVBAR;
