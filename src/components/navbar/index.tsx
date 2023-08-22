import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  GreenText,
  NavLink,
  NavbarToggle,
  StyledNavbar,
  StyledOffcanvas,
} from "./styles";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavTop = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  return (
    <>
      {["sm", "md", "lg", "xl", "xxl"].map((expand) => (
        <StyledNavbar expand={expand} key={expand}>
          <Container fluid>
            <Navbar.Brand href="#home" className="white">
              <GreenText>&lt;</GreenText> R<GreenText>UI</GreenText> PINTO{" "}
              <GreenText>/&gt;</GreenText>
            </Navbar.Brand>
            <NavbarToggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <StyledOffcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              onHide={() => setIsOffcanvasOpen(false)}
              onShow={() => setIsOffcanvasOpen(true)}
            >
              <Offcanvas.Header
                closeButton
                className="justify-content-end mt-3 me-3"
              ></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink
                    href="#hello"
                    className="white"
                    isOffcanvasOpen={isOffcanvasOpen}
                  >
                    Hello
                  </NavLink>
                  <NavLink
                    href="#about"
                    className="white"
                    isOffcanvasOpen={isOffcanvasOpen}
                  >
                    About
                  </NavLink>
                  <NavLink
                    href="#projects"
                    className="white"
                    isOffcanvasOpen={isOffcanvasOpen}
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    href="#contact"
                    className="white"
                    isOffcanvasOpen={isOffcanvasOpen}
                  >
                    Contact
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </StyledOffcanvas>
          </Container>
        </StyledNavbar>
      ))}
    </>
  );
};

export default NavTop;
