import React, { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
import TokenManager from "../api/TokenManager";
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
    target: "_blank",
  },
  {
    id: 5,
    path: "https://www.facebook.com/RivaHaskovo",
    icon: <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />,
    eventkey: 2,
    target: "_blank",
  },
  // {
  //   id: 6,
  //   path: "#contactus",
  //   text: "Contact Us",
  //   icon: <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />,
  //   eventkey: 3,
  // },
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
  {
    id: 9,
    path: "/",
    text: "Log Out",
  },
  {
    id: 10,
    path: "/userProfile",
    text: "User Profile",
  },
  {
    id: 11,
    path: "/reservationCalendar",
    text: "Reservation Calendar",
  },
  {
    id: 12,
    path: "/chatRoom",
    text: "Admin Support",
  },
  {
    id: 13,
    path: "/adminuserpanel",
    text: "Admin Panel",
  },
];

const NavbarRiva = () => {
  const isAuthenticated = TokenManager.isAuthenticated();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  useEffect(() => {
    // Check if the user has the ADMIN or CUSTOMER role
    const claims = TokenManager.getClaims();
    if (claims && claims.roles) {
      setIsAdmin(claims.roles.includes("ADMIN"));
      setIsCustomer(claims.roles.includes("CUSTOMER"));
    }
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" className="fixed-top navbar-scroll">
      <Container>
        <Navbar.Brand href="/">
          <img src={RivaLogo} alt="Riva Logo" width="50" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {links.map((link) => (
            <React.Fragment key={link.id}>
              {link.id < 4 && (
                <Nav className="me-auto">
                  <Nav.Link className="text-white" href={link.path}>
                    {link.text}
                  </Nav.Link>
                </Nav>
              )}
              {link.id > 3 && link.id < 7 && (
                <Nav>
                  <Nav.Link
                    eventKey={link.eventkey}
                    className={`hover-animation ${
                      link.id === 6 ? "text-white" : ""
                    }`}
                    href={link.path}
                    target={link.target}
                  >
                    {link.icon}
                    {link.id === 6 && <span> {link.text}</span>}
                  </Nav.Link>
                </Nav>
              )}
              {link.id === 10 && (
                <Nav>
                  <Nav.Link href={link.path}>
                    {(isAuthenticated && isAdmin) || isCustomer ? (
                      <Button variant="primary">{link.text}</Button>
                    ) : null}
                  </Nav.Link>
                </Nav>
              )}
              {link.id === 11 && (
                <Nav>
                  <Nav.Link href={link.path}>
                    {(isAuthenticated && isAdmin) || isCustomer ? (
                      <Button variant="primary">{link.text}</Button>
                    ) : null}
                  </Nav.Link>
                </Nav>
              )}
              {link.id === 12 && (
                <Nav>
                  <Nav.Link href={link.path}>
                    {isAuthenticated ? (
                      <Button variant="primary">{link.text}</Button>
                    ) : null}
                  </Nav.Link>
                </Nav>
              )}
              {link.id === 13 && (
                <Nav>
                  <Nav.Link href={link.path}>
                    {isAuthenticated && isAdmin ? (
                      <Button variant="primary">{link.text}</Button>
                    ) : null}
                  </Nav.Link>
                </Nav>
              )}
              {link.id !== 9 &&
                link.id > 6 &&
                link.id < 9 &&
                !isAuthenticated && (
                  <Nav>
                    <Nav.Link href={link.path}>
                      <Button variant="primary">{link.text}</Button>
                    </Nav.Link>
                  </Nav>
                )}
              {link.id === 9 && (
                <Nav>
                  <Nav.Link href={link.path}>
                    {isAuthenticated ? (
                      <Button variant="danger" onClick={TokenManager.clear}>
                        {link.text}
                      </Button>
                    ) : null}
                  </Nav.Link>
                </Nav>
              )}
            </React.Fragment>
          ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarRiva;
