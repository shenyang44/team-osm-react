import React from "react";
import { Navbar, Nav, NavbarBrand, NavLink } from "react-bootstrap";

const NAVBAR = (props) => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Navbar.Brand href="/">Bloodi</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/blood">About Blood</Nav.Link>
          <Nav.Link href="/donate">FAQ</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        <Nav>
          {props.loggedIn ? (
            <Nav.Link href="" onClick={props.logout}>
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link href="/login">Get Started</Nav.Link>
          )}
          <Nav.Link href="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NAVBAR;
