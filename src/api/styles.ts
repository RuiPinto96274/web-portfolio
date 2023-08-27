import { styled } from "styled-components";

export const TitleInput = styled.h1`
  font-size: 18px;
  font-weight: 400 !important;
  color: ${(props) => props.theme.colors.lightGray};
  margin-bottom: 1rem;
`;

export const StyledInput = styled.input`
  background: rgba(197, 197, 197, 0.8);
  color: #000;
  border: none;
  height: 3rem;

  &:active,
  &:focus {
    outline: 4px solid #504ebb;
    box-shadow: 0 0 0 4px #504ebb;
  }
`;

export const StyledTextArea = styled.textarea`
  background: rgba(197, 197, 197, 0.8);
  color: #000;
  border: none;

  &:active,
  &:focus {
    outline: 4px solid #504ebb;
    box-shadow: 0 0 0 4px #504ebb;
  }
`;

export const InvalidInput = styled.div`
  margin-top: 0.5rem;
  color: #ffa500;
  font-weight: 300;
`;
