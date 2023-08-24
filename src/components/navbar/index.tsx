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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <StyledNavbar expand="lg">
        <Container fluid="md">
          <Navbar.Brand href="#home" className="white">
            <GreenText>&lt;</GreenText> R<GreenText>UI</GreenText> PINTO{" "}
            <GreenText>/&gt;</GreenText>
          </Navbar.Brand>
          <NavbarToggle aria-controls="offcanvasNavbar-expand-lg" />
          <StyledOffcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            onHide={() => setIsOpen(false)}
            onShow={() => setIsOpen(true)}
          >
            <Offcanvas.Header
              closeButton
              className="justify-content-end mt-3 me-3"
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink href="#hello" className="white" isOpen={isOpen}>
                  Hello
                </NavLink>
                <NavLink href="#about" className="white" isOpen={isOpen}>
                  About
                </NavLink>
                <NavLink href="#projects" className="white" isOpen={isOpen}>
                  Projects
                </NavLink>
                <NavLink href="#contact" className="white" isOpen={isOpen}>
                  Contact
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </StyledOffcanvas>
        </Container>
      </StyledNavbar>
    </>
  );
};

export default NavTop;
