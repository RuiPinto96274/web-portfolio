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

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollAndClose = (hash: string) => {
    scrolltoHash(hash);
    setIsOpen(false);
  };

  return (
    <>
      <StyledNavbar expand="lg">
        <Container fluid="md">
          <Navbar.Brand
            onClick={() => scrolltoHash("hello")}
            className="white"
            style={{ cursor: "pointer" }}
          >
            <GreenText>&lt;</GreenText> R<GreenText>UI</GreenText> PINTO{" "}
            <GreenText>/&gt;</GreenText>
          </Navbar.Brand>
          <NavbarToggle
            aria-controls="offcanvasNavbar-expand-lg"
            onClick={() => setIsOpen(true)}
          />
          <StyledOffcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            onHide={() => setIsOpen(false)}
            onShow={() => setIsOpen(true)}
            show={isOpen}
          >
            <Offcanvas.Header
              closeButton
              className="justify-content-end mt-3 me-3"
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink
                  as={Nav.Link}
                  isoffcanvasopen={isOpen}
                  className="white"
                  onClick={() => scrollAndClose("hello")}
                >
                  Hello
                </NavLink>
                <NavLink
                  as={Nav.Link}
                  isoffcanvasopen={isOpen}
                  className="white"
                  onClick={() => scrollAndClose("about")}
                >
                  About
                </NavLink>
                <NavLink
                  as={Nav.Link}
                  isoffcanvasopen={isOpen}
                  className="white"
                  onClick={() => scrollAndClose("projects")}
                >
                  Projects
                </NavLink>
                <NavLink
                  as={Nav.Link}
                  isoffcanvasopen={isOpen}
                  className="white"
                  onClick={() => scrollAndClose("contact")}
                >
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
