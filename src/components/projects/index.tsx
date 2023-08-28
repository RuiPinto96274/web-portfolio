import React from "react";
import {
  ButtonDiv,
  Section,
  SectionTitle,
  TitleDescription,
} from "../hero/styles";
import { Col, Container, OverlayTrigger } from "react-bootstrap";
import { CustomHr } from "../about/styles";
import {
  DescriptionProject,
  ImageContainer,
  RowPadding,
  TechContainer,
  TitleProject,
  TitleTech,
} from "./styles";
import Custombtn from "../custombtn";
import Tooltip from "react-bootstrap/Tooltip";

const iconsKlatch = [
  { src: "/assets/icons/gitlab.svg", alt: "gitlab icon", name: "GitLab" },
  { src: "/assets/icons/nextjs.svg", alt: "next.js icon", name: "Next.js" },
  { src: "/assets/icons/react.svg", alt: "react icon", name: "React" },
  { src: "/assets/icons/mantine.svg", alt: "mantine icon", name: "Mantine" },
  {
    src: "/assets/icons/typescript.svg",
    alt: "typescript icon",
    name: "TypeScript",
  },
];

const iconsPortfolio = [
  { src: "/assets/icons/github.svg", alt: "github icon", name: "GitHub" },
  { src: "/assets/icons/nextjs.svg", alt: "next.js icon", name: "Next.js" },
  { src: "/assets/icons/react.svg", alt: "react icon", name: "React" },
  {
    src: "/assets/icons/typescript.svg",
    alt: "typescript icon",
    name: "TypeScript",
  },
  {
    src: "/assets/icons/bootstrap.svg",
    alt: "bootstrap icon",
    name: "Bootstrap",
  },
];

const Projects = () => {
  return (
    <Section className="padding-top" id="projects">
      <Container fluid="md">
        <div className="text-center d-flex justify-content-center align-items-center flex-column">
          <SectionTitle>PROJECTS</SectionTitle>
          <CustomHr />
          <TitleDescription className="pb-5">
            In the section below you can see a showcase of the projects I have
            done
          </TitleDescription>
        </div>
        <RowPadding>
          <Col xl={6}>
            <ImageContainer>
              <img src="/assets/images/laptop_klatch.png" alt="laptop klatch" />
            </ImageContainer>
          </Col>
          <Col xl={6} className="mt-4">
            <TitleProject>Klatch.</TitleProject>
            <DescriptionProject className="mt-4">
              Klatch is a service for creating and managing events in a
              personalized way to suit different types of events.
            </DescriptionProject>
            <TitleTech className="mt-4">Tech Stack</TitleTech>
            <TechContainer>
              {iconsKlatch.map((icon, index) => (
                <OverlayTrigger
                  key={index}
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${index}`}>{icon.name}</Tooltip>
                  }
                >
                  <img src={icon.src} alt={icon.alt} />
                </OverlayTrigger>
              ))}
            </TechContainer>
            <ButtonDiv className="mt-3">
              <Custombtn
                text="Case Study"
                onClick={() =>
                  window.open(
                    "https://codepoint.pt/work/klatch-landing-page-2023"
                  )
                }
              />
            </ButtonDiv>
          </Col>
        </RowPadding>
        <RowPadding>
          <Col xl={6}>
            <ImageContainer>
              <img
                src="/assets/images/laptop_portfolio.png"
                alt="laptop portfolio"
              />
            </ImageContainer>
          </Col>
          <Col xl={6} className="mt-4">
            <TitleProject>Portfolio</TitleProject>
            <DescriptionProject className="mt-4">
              Personal Portfolio where you can get to know me and the work i
              have done.
            </DescriptionProject>
            <TitleTech className="mt-4">Tech Stack</TitleTech>
            <TechContainer>
              {iconsPortfolio.map((icon, index) => (
                <OverlayTrigger
                  key={index}
                  placement="top"
                  overlay={
                    <Tooltip id={`tooltip-${index}`}>{icon.name}</Tooltip>
                  }
                >
                  <img src={icon.src} alt={icon.alt} />
                </OverlayTrigger>
              ))}
            </TechContainer>
            <ButtonDiv className="mt-3">
              <Custombtn text="Launch" />
            </ButtonDiv>
          </Col>
        </RowPadding>
      </Container>
    </Section>
  );
};

export default Projects;
