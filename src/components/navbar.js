import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Form, NavbarBrand, NavLink } from "react-bootstrap";
import "./navbar.css";
import { motion } from "framer-motion";
// import Img from "react";

const pageTransit = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const NAVBAR = props => {
  return (
    <motion.div
      className="navbar"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransit}
    >
      <Navbar expand="lg">
        <NavbarBrand href="/">Bloodi</NavbarBrand>
        <Navbar.Toggle className="navtog" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form>
            <NavLink className="btn" href="/blood">
              About Blood
            </NavLink>
          </Form>
          <Form>
            <NavLink className="btn" href="/donate">
              About Donations
            </NavLink>
          </Form>
          <Form>
            <NavLink className="btn" href="/plans">
              In Progress
            </NavLink>
          </Form>
          <Form>
            <NavLink className="btn" href="/profile">
              Profile
            </NavLink>
          </Form>
          <Form>
            {props.loggedIn ? (
              <NavLink className="btn" href="" onClick={props.logout}>
                Logout
              </NavLink>
            ) : (
              <NavLink className="btn" href="/login">
                Get Started
              </NavLink>
            )}
          </Form>
          <Form>
            <NavLink className="btn" href="/contact">
              Contact Us
            </NavLink>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default NAVBAR;
