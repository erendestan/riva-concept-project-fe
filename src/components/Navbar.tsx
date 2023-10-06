import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../styling/navbar-style.css";
import RivaLogo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Carrousel from "./Carrousel";

const NavbarRiva = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" className="fixed-top navbar-scroll">
        <Container>
          <Navbar.Brand href="#home">
            <img src={RivaLogo} alt="Riva Logo" width="50" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" href="#aboutus">
                About Us
              </Nav.Link>
              <Nav.Link className="text-white" href="#photogallery">
                Photo Gallery
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://www.instagram.com/rivaconcept.bg/">
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#ffffff" }}
                />
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="https://www.facebook.com/RivaHaskovo"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#ffffff" }}
                />
              </Nav.Link>
              <Nav.Link eventKey={3} href="#phonenumber">
                <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="#home/photogallery" element={<Carrousel />} />
      </Routes>
    </Router>
  );
};

export default NavbarRiva;
