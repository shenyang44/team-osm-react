import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

const NAVBAR = (props) => {
  return (
    <Navbar className="Nav" collapseOnSelect expand="md">
      <Navbar.Brand className="NavLink" href="/">
        Bloodi
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="NavLink" href="/blood">
            About Blood
          </Nav.Link>
          <Nav.Link className="NavLink" href="/donate">
            FAQ
          </Nav.Link>
          <Nav.Link className="NavLink" href="/events">
            Events
          </Nav.Link>
          <Nav.Link className="NavLink" href="/map">
            Locate
          </Nav.Link>
          <Nav.Link className="NavLink" href="/profile">
            Profile
          </Nav.Link>
        </Nav>
        <Nav>
          {props.loggedIn ? (
            <Nav.Link className="NavLink" href="" onClick={props.logout}>
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link className="NavLink" href="/login">
              Get Started
            </Nav.Link>
          )}
          <Nav.Link className="NavLink" href="/contact">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NAVBAR;
