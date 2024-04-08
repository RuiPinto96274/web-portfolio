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
import { projectsData } from "../../projects_data";

const Projects = () => {
  return (
    <Section className="padding-top" id="projects">
      <Container fluid="md">
        <div className="text-center d-flex justify-content-center align-items-center flex-column">
          <SectionTitle>PROJECTS</SectionTitle>
          <CustomHr />
          <TitleDescription className="pb-5">
            In the section below you can see a showcase of the web projects I
            have done
          </TitleDescription>
        </div>
        {projectsData.map((project, index) => (
          <RowPadding key={index}>
            <Col xl={6}>
              <ImageContainer>
                <img src={project.srcImage} alt={project.altImage} />
              </ImageContainer>
            </Col>
            <Col xl={6} className="mt-4">
              <TitleProject>{project.title}</TitleProject>
              <DescriptionProject className="mt-4">
                {project.description}
              </DescriptionProject>
              <TitleTech className="mt-4">Tech Stack</TitleTech>
              <TechContainer>
                {project.technologies.map((tech, index) => (
                  <OverlayTrigger
                    key={index}
                    placement="top"
                    overlay={
                      <Tooltip id={`tooltip-${index}`}>{tech.name}</Tooltip>
                    }
                  >
                    <img src={tech.src} alt={tech.alt} />
                  </OverlayTrigger>
                ))}
              </TechContainer>
              <ButtonDiv className="mt-3">
                {project.textBtn && project.urlBtn && (
                  <Custombtn
                    text={project.textBtn}
                    onClick={() => window.open(project.urlBtn)}
                  />
                )}
              </ButtonDiv>
            </Col>
          </RowPadding>
        ))}
      </Container>
    </Section>
  );
};

export default Projects;
