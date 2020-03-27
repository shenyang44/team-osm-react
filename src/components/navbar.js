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
        <NavbarBrand href="/">Blardy</NavbarBrand>
        <Navbar.Toggle className="navtog" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Form>
            <NavLink className="navtabs" href="/faq">
              FAQ
            </NavLink> temporary comment it out
          </Form> */}
          <Form>
            <NavLink className="navtabs" href="/faq">
              FAQ
            </NavLink>
          </Form>
          <Form>
            <NavLink className="navtabs" href="/blood">
              About Blood
            </NavLink>
          </Form>
          <Form>
            <NavLink className="navtabs" href="/donate">
              About Donations
            </NavLink>
          </Form>
          <Form>
            <NavLink className="navtabs" href="/plans">
              In Progress
            </NavLink>
          </Form>
          <Form>
            <NavLink className="navtabs" href="/profile">
              Profile
            </NavLink>
          </Form>
          <Form>
            {props.loggedIn ? (
              <NavLink className="navtabs" href="" onClick={props.logout}>
                Logout
              </NavLink>
            ) : (
              <NavLink className="navtabs" href="/login">
                Get Started
              </NavLink>
            )}
          </Form>
          <Form>
            <NavLink className="navtabs" href="/contact">
              Contact Us
            </NavLink>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </motion.div>
  );
};

export default NAVBAR;
