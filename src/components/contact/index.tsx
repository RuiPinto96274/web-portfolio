import React from "react";
import { Section, SectionTitle, TitleDescription } from "../hero/styles";
import { Container } from "react-bootstrap";
import { CustomHr } from "../about/styles";
import { FormContainer } from "./styles";
import ContactForm from "../../api";

const Contact = () => {
  return (
    <Section className="padding-top" id="contact">
      <Container fluid="md">
        <div className="text-center d-flex justify-content-center align-items-center flex-column">
          <SectionTitle>CONTACT</SectionTitle>
          <CustomHr />
          <TitleDescription className="pb-5 pe-5 ps-5">
            Connecting is easy – fill out the contact form, and I'll be in
            touch!
          </TitleDescription>
        </div>
        <FormContainer>
          <ContactForm />
        </FormContainer>
      </Container>
    </Section>
  );
};

export default Contact;
