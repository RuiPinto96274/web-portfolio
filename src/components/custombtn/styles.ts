import { styled } from "styled-components";
import Button from "react-bootstrap/Button";

export const CustomBtn = styled(Button)`
  background-color: transparent;
  padding: 0.5em;
  border-radius: 5px;
  min-width: 25%;
  font-size: 20px;
  margin-top: 1em;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  border: 1px dashed #0f6;
  color: white;
  z-index: 1;

  @media (max-width: 1200px) {
    min-width: 27%;
  }

  @media (max-width: 991px) {
    min-width: 35%;
  }

  @media (max-width: 991px) {
    min-width: 35%;
  }

  @media (max-width: 767px) {
    min-width: 20%;
  }

  @media (max-width: 600px) {
    min-width: 25%;
  }

  @media (max-width: 500px) {
    min-width: 30%;
  }

  &::before,
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color: #0a0718;
    transition: 1s ease;
  }

  &::before {
    top: -1em;
    left: -1em;
  }

  &::after {
    left: calc(100% + 1em);
    top: calc(100% + 1em);
  }

  &:hover::before,
  &:hover::after {
    height: 410px;
    width: 410px;
  }

  &:hover {
    border: 0;
    background-color: ${(props) => props.theme.colors.primaryColor};
    color: #fff;
  }

  &:active {
    filter: brightness(0.8);
  }
`;
