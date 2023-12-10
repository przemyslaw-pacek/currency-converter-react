import styled, { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
  }
  
  *,
  ::after ::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    background-image: url("${background}");
    background-size: cover;
    min-height: 100vh;
  }
`;

export const Title = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 9px;
`;