import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button, Nav, Form, NavDropdown, FormControl } from "react-bootstrap";
import "./navbar.css";
import { motion } from "framer-motion";

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
        <Navbar.Brand href="/">Blardy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/me">Profile</Nav.Link>
          </Nav>
          <Form inline>
            <Button variant="outline-secondary">xxxxxx</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default NAVBAR;
