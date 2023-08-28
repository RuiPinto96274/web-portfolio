import { styled } from "styled-components";

export const FormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  width: 80%;
  margin: 0rem auto;
  padding: 2.5rem;
  height: 36rem;

  @media (max-width: 300px) {
    padding: 1.5rem;
  }
`;
