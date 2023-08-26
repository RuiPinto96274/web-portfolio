import { Row } from "react-bootstrap";
import { styled } from "styled-components";

export const TitleProject = styled.h1`
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 1199px) {
    text-align: center;
  }
`;

export const DescriptionProject = styled.h1`
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 1199px) {
    text-align: center;
    padding: 0 15%;
  }
`;

export const TitleTech = styled.h1`
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 1199px) {
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    display: flex;
    justify-content: center;
    img {
      width: 80%;
    }
  }
`;

export const TechContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;

  @media (max-width: 1199px) {
    justify-content: center;
  }
`;

export const RowPadding = styled(Row)`
  padding-bottom: 9rem;
`;
