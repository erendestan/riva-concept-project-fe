import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
import "../styling/navbar-style.css";
import RivaLogo from "../assets/images/logo.png";
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Carrousel from "./Carrousel";
import { ButtonGroup } from "react-bootstrap";

const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/#aboutus",
    text: "About Us",
  },
  {
    id: 3,
    path: "/#photogallery",
    text: "Photo Gallery",
  },
  {
    id: 4,
    path: "https://www.instagram.com/rivaconcept.bg/",
    icon: <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />,
    eventkey: 1,
  },
  {
    id: 5,
    path: "https://www.facebook.com/RivaHaskovo",
    icon: <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />,
    eventkey: 2,
  },
  {
    id: 6,
    path: "#contactus",
    text: "Contact Us",
    icon: <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />,
    eventkey: 3,
  },
  {
    id: 7,
    path: "/login",
    text: "Login",
  },
  {
    id: 8,
    path: "/createaccount",
    text: "Create Account",
  },
];

const NavbarRiva = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top navbar-scroll">
      <Container>
        <Navbar.Brand href="#home">
          <img src={RivaLogo} alt="Riva Logo" width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto"> */}
          {links.map((link) => {
            if (link.id < 4) {
              return (
                <Nav className="me-auto" key={link.id}>
                  {
                    <Nav.Link className="text-white" href={link.path}>
                      {link.text}
                    </Nav.Link>
                  }
                </Nav>
              );
            }
            if (link.id > 3 && link.id < 7) {
              if (link.id !== 6) {
                return (
                  <Nav key={link.id}>
                    <Nav.Link
                      eventKey={link.eventkey}
                      className="hover-animation"
                      href={link.path}
                    >
                      {link.icon}
                    </Nav.Link>
                  </Nav>
                );
              } else {
                return (
                  <Nav key={link.id}>
                    <Nav.Link
                      eventKey={link.eventkey}
                      className="hover-animation text-white"
                      href={link.path}
                    >
                      {link.icon}
                      <span> </span>
                      {link.text}
                    </Nav.Link>
                  </Nav>
                );
              }
            } else {
              return (
                <Nav key={link.id}>
                  <Nav.Link href={link.path}>
                    <Button variant="primary">{link.text}</Button>
                  </Nav.Link>
                </Nav>
              );
            }
          })}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarRiva;
