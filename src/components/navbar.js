import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Form, NavbarBrand, NavLink } from "react-bootstrap";
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
    <motion.div
      className="navbar"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransit}
    >
      <Navbar expand="lg">
        <NavbarBrand href="/home">Blardy/LogoHere</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form>
            <NavLink className="navtabs" href="/faq">
              FAQ
            </NavLink>
          </Form>
          <Form>
            <NavLink className="navtabs" href="/another">
              anotherFAQ
            </NavLink>
          </Form>
          <Form>
            <NavLink className="navtabs" href="/me">
              Profile
            </NavLink>
          </Form>
          <Form>
            <NavLink className="navtabs" href="/login">
              Login
            </NavLink>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default NAVBAR;
