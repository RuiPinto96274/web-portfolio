import { Col } from "react-bootstrap";
import { styled } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const CustomHr = styled.hr`
  width: 45px;
  border-top: 4px solid #0f6;
  opacity: 1;
  border-radius: 5px;
  margin-top: 8px;
`;

export const DashedBox = styled.div`
  width: 100%;
  border: 2px dashed #0f6;
  background-color: transparent;
  height: 14.5rem;
  padding: 20px 30px;

  @media ${breakpoints.xl} {
    height: 16rem;
  }

  @media ${breakpoints.lg} {
    height: 18rem;
  }

  @media ${breakpoints.md} {
    height: 22rem;
  }

  @media ${breakpoints.sm} {
    height: 20rem;
  }
  @media (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
  }
  @media ${breakpoints.xs} {
    height: 18rem;
  }

  @media (max-width: 450px) {
    height: 21rem;
  }

  &.justify {
    text-align: justify !important;
  }
`;

export const CustomSpan = styled.span`
  @media ${breakpoints.md} {
    font-size: 15px;
  }
`;

export const TitleAbout = styled.h3`
  font-size: 20px !important;
  font-weight: 600;

  @media ${breakpoints.md} {
    font-size: 18px !important;
  }
`;

export const SecondaryAbout = styled.span`
  font-size: 18px !important;

  @media ${breakpoints.md} {
    font-size: 16px !important;
  }
`;

export const AboutCol = styled(Col)`
  @media (min-width: 560px) and (max-width: 767.5px) {
    width: 90%;
    margin: 2rem auto;
  }

  @media (max-width: 560px) {
    margin: 2rem auto;
  }
`;

export const ContentDiv = styled.div`
  @media (min-width: 620px) and (max-width: 767.5px) {
    margin-top: 3rem;
  }
`;
