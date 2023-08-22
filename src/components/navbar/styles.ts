import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { styled } from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.colors.navColor};
  height: 90px;
  width: 100%;
  padding: 0 5%;
  position: fixed;

  .white {
    color: white;
  }
`;

export const StyledOffcanvas = styled(Navbar.Offcanvas)`
  background-color: ${(props) => props.theme.colors.navColor};
  color: white;

  .btn-close {
    --bs-btn-close-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z' fill='white'/%3e%3c/svg%3e");
  }
`;
interface NavLinkProps {
  isOffcanvasOpen: boolean;
}
export const NavLink = styled(Nav.Link)<NavLinkProps>`
  margin-left: 4rem;
  position: relative;
  font-size: ${(props) => (props.isOffcanvasOpen ? "25px" : "16px")};
  margin-bottom: ${(props) => (props.isOffcanvasOpen ? "1rem" : "")};
  margin-left: ${(props) => (props.isOffcanvasOpen ? "1.5rem" : "")};
  &:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.secondaryColor};
    transform: scaleX(0);
    transform-origin: center;
    animation: underline-animation 0.3s ease-in-out forwards;
  }

  @keyframes underline-animation {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

export const NavbarToggle = styled(Navbar.Toggle)`
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='white' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
  }
`;

export const GreenText = styled.span`
  color: ${({ theme }) => theme.colors.secondaryColor};
`;
