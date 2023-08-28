import React from "react";
import { Section } from "../hero/styles";
import { Container } from "react-bootstrap";
import { GreenText } from "../navbar/styles";
import {
  Copyright,
  NavbarBrand,
  SocialContainer,
  SocialDiv,
  StyledHr,
  StyledSpan,
} from "./styles";

const socialIcons = [
  {
    src: "/assets/icons/social/linkedin.svg",
    alt: "linkedin icon",
    url: "https://www.linkedin.com/in/rui-miguel-pinto/",
  },
  {
    src: "/assets/icons/social/github2.svg",
    alt: "github icon",
    url: "https://github.com/RuiPinto96274",
  },
  {
    src: "/assets/icons/social/twitter.svg",
    alt: "twitter icon",
    url: "https://twitter.com/38ruimiguel",
  },
  {
    src: "/assets/icons/social/instagram.svg",
    alt: "instagram icon",
    url: "https://www.instagram.com/rui.miguel2610/",
  },
];

const Footer = () => {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Section>
      <Container fluid="md" className="pt-5">
        <div className="d-flex justify-content-center pb-4">
          <NavbarBrand onClick={() => scrolltoHash("hello")} className="white">
            <GreenText>&lt;</GreenText> R<GreenText>UI</GreenText> PINTO{" "}
            <GreenText>/&gt;</GreenText>
          </NavbarBrand>
        </div>
        <StyledHr className="mb-4" />
        <div className="d-flex justify-content-center">
          <StyledSpan onClick={() => scrolltoHash("hello")}>Hello</StyledSpan>
          <StyledSpan onClick={() => scrolltoHash("about")}>About</StyledSpan>
          <StyledSpan onClick={() => scrolltoHash("projects")}>
            Projects
          </StyledSpan>
          <StyledSpan onClick={() => scrolltoHash("contact")}>
            Contact
          </StyledSpan>
        </div>
        <StyledHr className="mt-4" />

        <SocialDiv>
          <Copyright>
            © Copyright 2023. Made by <strong>Rui Pinto</strong>
          </Copyright>
          <SocialContainer>
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                onClick={() => window.open(icon.url)}
                style={{ cursor: "pointer" }}
              />
            ))}
          </SocialContainer>
        </SocialDiv>
      </Container>
    </Section>
  );
};

export default Footer;
