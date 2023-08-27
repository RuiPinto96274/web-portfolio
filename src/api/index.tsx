import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import { CustomBtn } from "../components/custombtn/styles";
import {
  InvalidInput,
  StyledInput,
  StyledTextArea,
  TitleInput,
} from "./styles";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (!formData.get("name")) {
      setNameError("Please provide your name.");
      return;
    } else {
      setNameError("");
    }

    if (!formData.get("email")) {
      setEmailError("Please provide your email.");
      return;
    } else {
      setEmailError("");
    }

    if (!formData.get("message")) {
      setMessageError("Please write your message.");
      return;
    } else {
      setMessageError("");
    }

    formData.append("access_key", "738b6d1b-2ed7-4811-9865-4edcd44c94e5");

    setResult("Sending....");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("");
      toast.success("Message sent sucessfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeButton: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      event.target.reset();
      setNameError("");
      setEmailError("");
      setMessageError("");
    } else {
      console.log("Error", res);
      setResult(res.message);
    }

    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
    }, 2500);
  };

  return (
    <>
      <form onSubmit={onSubmit} noValidate>
        <Row className="mb-3">
          <Col md={12}>
            <TitleInput>Name</TitleInput>
            <StyledInput
              type="text"
              required
              className={`form-control ${nameError ? "error" : ""}`}
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
            {nameError && <InvalidInput>{nameError}</InvalidInput>}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <TitleInput>Email</TitleInput>
            <StyledInput
              type="email"
              required
              className={`form-control ${emailError ? "error" : ""}`}
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
            {emailError && <InvalidInput>{emailError}</InvalidInput>}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <TitleInput>Message</TitleInput>
            <StyledTextArea
              className={`form-control ${messageError ? "error" : ""}`}
              required
              name="message"
              id="message"
              cols={30}
              rows={7}
              placeholder="Type Your Message Here"
            />
            {messageError && <InvalidInput>{messageError}</InvalidInput>}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={12}>
            <div className="d-flex justify-content-center">
              <CustomBtn type="submit">Send Message</CustomBtn>
            </div>
          </Col>
        </Row>
      </form>
      {showResult && <span>{result}</span>}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default ContactForm;
