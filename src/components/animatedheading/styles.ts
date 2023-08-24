import { styled } from "styled-components";
import { breakpoints } from "../../styles/breakpoints";
import { motion } from "framer-motion";

export const MotionSpan = styled(motion.span)`
  font-size: 64px;
  font-weight: 400 !important;

  @media ${breakpoints.md} {
    font-size: 48px;
  }

  @media ${breakpoints.sm} {
    font-size: 40px;
  }

  @media ${breakpoints.xs} {
    font-size: 32px;
  }
`;

export const CenteredContainer = styled.div`
  @media ${breakpoints.sm} {
    text-align: center;
  }
`;
