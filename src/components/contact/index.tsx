import React from "react";
import { Section, SectionTitle, TitleDescription } from "../hero/styles";
import { Container } from "react-bootstrap";
import { CustomHr } from "../about/styles";
import { ContactDetails, FormContainer } from "./styles";
import ContactForm from "../../api";

const Contact = () => {
  return (
    <Section className="padding-top" id="contact">
      <Container fluid="md">
        <div className="text-center d-flex justify-content-center align-items-center flex-column">
          <SectionTitle>CONTACT</SectionTitle>
          <CustomHr />
          <TitleDescription className="pb-3">
            Connecting is easy – fill out the contact form, and I'll be in
            touch!
          </TitleDescription>
        </div>
        <ContactDetails>
          <p>
            <strong>Email: ruipinto2610@gmail.com</strong>
          </p>
          <p>
            <strong>Phone: +351 939026282</strong>
          </p>
        </ContactDetails>
        <FormContainer>
          <ContactForm />
        </FormContainer>
      </Container>
    </Section>
  );
};

export default Contact;
