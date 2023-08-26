import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { styled } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const Section = styled.div`
  background-color: ${(props) => props.theme.colors.primaryColor};

  &.padding-top {
    padding-top: 9rem;
  }
`;

export const CustomRow = styled(Row)`
  padding-top: 2rem;

  @media ${breakpoints.md} {
    padding-top: 3rem;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: 400 !important;

  @media ${breakpoints.md} {
    font-size: 24px;
  }

  @media ${breakpoints.sm} {
    text-align: center !important;
  }
`;

export const ImageContainer = styled.div`
  .hero-image {
    max-width: "100%";
    max-height: auto;
    max-width: 100%;
    max-height: 100%;
  }

  @media ${breakpoints.md} {
    .hero-image {
      width: 100%;
      height: auto;
      margin-top: 2rem;
    }
  }

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    .hero-image {
      width: 70%;
      height: auto;
      margin-top: 2rem;
      margin: 0 auto;
    }
  }
`;

export const TitleDescription = styled.h1`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;

  @media ${breakpoints.md} {
    font-size: 18px;
  }

  &.justify {
    @media ${breakpoints.sm} {
      text-align: justify;
      padding: 0 5%;
    }
  }
`;

export const CustomCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  @media (max-width: 1199px) {
    text-align: center;
  }
  @media ${breakpoints.sm} {
    text-align: center;
  }
`;

export const MouseScroll = styled.div`
  @keyframes wheel {
    to {
      opacity: 0;
      top: 40px;
    }
  }
  margin-top: 2rem;
  width: 31px;
  height: 62px;
  border: 3px solid #26b860;
  border-radius: 60px;
  position: relative;
  &::before {
    content: "";
    width: 12px;
    height: 12px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #26b860;
    border-radius: 50%;
    opacity: 1;
    animation: wheel 2s infinite;
    -webkit-animation: wheel 2s infinite;
  }
`;
