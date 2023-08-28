import React from "react";
import { Section, SectionTitle, TitleDescription } from "../hero/styles";
import { Container, Row } from "react-bootstrap";
import {
  AboutCol,
  ContentDiv,
  CustomHr,
  CustomSpan,
  DashedBox,
  SecondaryAbout,
  TitleAbout,
} from "./styles";

const About = () => {
  return (
    <Section className="padding-top" id="about">
      <Container fluid="md">
        <div className="text-center d-flex justify-content-center align-items-center flex-column">
          <SectionTitle>ABOUT</SectionTitle>
          <CustomHr />
          <TitleDescription className="pb-5">
            Here is some more information about my professional experience and
            education
          </TitleDescription>
        </div>
        <Row>
          <AboutCol md={6}>
            <DashedBox>
              <ContentDiv>
                <TitleAbout>Professional experience</TitleAbout>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <SecondaryAbout>Summer Internship</SecondaryAbout>
                  <SecondaryAbout>Codepoint.</SecondaryAbout>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <CustomSpan>Braga, Portugal</CustomSpan>
                  <CustomSpan>Jul 2023 - Aug 2023</CustomSpan>
                </div>
                <div className="mt-3" style={{ textAlign: "justify" }}>
                  <CustomSpan>
                    I held the position of Web Developer, with the goal of
                    creating a landing page for Codepoint's new product, Klatch.
                    Throughout this internship, I learned and used the following
                    technologies: React, GitLab, Next.js, Mantine, Figma,
                    ClickUp, and Slack.
                  </CustomSpan>
                </div>
              </ContentDiv>
            </DashedBox>
          </AboutCol>
          <AboutCol md={6}>
            <DashedBox>
              <ContentDiv>
                <TitleAbout>Education</TitleAbout>
                <div className="d-flex justify-content-space-between align-items-center mt-2">
                  <SecondaryAbout>
                    Bachelor’s in Engineering and Management of Information
                    Systems
                  </SecondaryAbout>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                  <CustomSpan>University of Minho</CustomSpan>
                  <CustomSpan>Oct 2020 - Jun 2023</CustomSpan>
                </div>
                <div className="mt-3" style={{ textAlign: "justify" }}>
                  <CustomSpan>
                    During my time in university, which lasted for three years,
                    I got the hang of several programming languages. Although
                    programming was just a part of it, i also learned what is
                    information systems and how to implement/improve them on
                    organizations.
                  </CustomSpan>
                </div>
              </ContentDiv>
            </DashedBox>
          </AboutCol>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
