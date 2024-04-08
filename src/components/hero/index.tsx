import React, { useState, useEffect } from "react";
import {
  TitleDescription,
  ImageContainer,
  Section,
  CustomCol,
  MouseScroll,
  CustomRow,
  ButtonDiv,
  SectionTitle,
} from "./styles";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { GreenText } from "../navbar/styles";
import Custombtn from "../custombtn";
import TypingHeading from "../animatedheading";

const headings = ["I'm Rui Pinto", "Welcome aboard!"];

const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id);
  element?.scrollIntoView({
    behavior: "auto",
  });
};

const Hero = () => {
  const [isBigScreen, setIsBigScreen] = useState(false);

  const checkScreenWidth = () => {
    const newIsBigScreen = window.innerWidth > 767;
    if (newIsBigScreen !== isBigScreen) {
      setIsBigScreen(newIsBigScreen);
    }
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, [isBigScreen]);

  return (
    <Section id="hello">
      <Container fluid="md">
        <CustomRow>
          <Col className="order-md-last" md={6}>
            <ImageContainer>
              <Image
                src="/assets/images/typingcomputer.png"
                className="hero-image"
              />
            </ImageContainer>
          </Col>
          <CustomCol md={6}>
            <div>
              <SectionTitle className="mb-3">
                <GreenText>Hello World!</GreenText>
              </SectionTitle>
              <div className="mb-3">
                <TypingHeading headings={headings} />
              </div>
              <TitleDescription className="justify">
                A Master’s student in Engineering and Management of Information
                Systems at the University of Minho, located in Portugal. At the
                moment, web development is what I like to do the most in terms
                of programming, and for that reason, I’m looking for an
                internship that allows me to acquire new skills and experience
                in that area.
              </TitleDescription>
              <ButtonDiv className="mt-3">
                <Custombtn
                  text="Get my CV"
                  openPdfInNewTab={"/assets/CV_Rui_Pinto_en.pdf"}
                />
                <Custombtn
                  text="Projects"
                  onClick={() => scrolltoHash("projects")}
                />
              </ButtonDiv>
            </div>
          </CustomCol>
        </CustomRow>
        {isBigScreen && (
          <div className="d-flex justify-content-center align-items-center">
            <MouseScroll></MouseScroll>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default Hero;
