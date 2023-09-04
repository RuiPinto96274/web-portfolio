import { styled } from "styled-components";

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  width: 80%;
  margin: 0rem auto;
  padding: 2.5rem;
  height: 38rem;

  @media (max-width: 560px) {
    width: 90%;
    padding: 1.5rem;
  }

  @media (max-width: 300px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const ContactDetails = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
