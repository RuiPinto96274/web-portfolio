import styled, { createGlobalStyle } from "styled-components";

export const transitionsDelay = "0.3s";

export const BasicStyles = createGlobalStyle`
  html, body {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }
  
  *:focus {
    outline: none;
  }

  body {
    font-family: 'Outfit' !important;
    color: ${({ theme }) => theme.colors.black} !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  p, ol, ul, dl {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit';
    margin: 0;
    padding: 0;
  }

  span{
    font-family: 'Outfit';
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export const ViewContainer = styled.div`
  width: 100%;
  max-width: 1038px;
  margin: auto;
`;
