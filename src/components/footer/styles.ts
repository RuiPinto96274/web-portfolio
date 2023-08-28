import { Navbar } from "react-bootstrap";
import { styled } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const NavbarBrand = styled(Navbar.Brand)`
  cursor: pointer;
  font-size: 20px;
`;

export const StyledHr = styled.hr`
  width: 100%;
  border-top: 2px solid #b9c4bd;
  opacity: 0.8;
`;

export const StyledSpan = styled.span`
  margin-left: 4rem;
  margin-right: 4rem;
  cursor: pointer;

  @media ${breakpoints.md} {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media ${breakpoints.sm} {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }

  @media ${breakpoints.xs} {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  @media (max-width: 380px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 300px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondaryColor};
  }
`;

export const SocialContainer = styled.div`
  img {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.2);
    }
    @media (max-width: 450px) {
      margin-left: 0.2rem;
      margin-right: 0.2rem;
    }

    @media (max-width: 380px) {
      margin-left: 0.1rem;
      margin-right: 0.1rem;
    }

    @media (max-width: 300px) {
      margin-left: 0.3rem;
      margin-right: 0.3rem;
    }
  }
`;

export const Copyright = styled.div`
  font-size: 14px;

  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

export const SocialDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 3rem;

  @media (max-width: 300px) {
    flex-direction: column;
    gap: 10px;
  }
`;
