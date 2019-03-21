import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  html {
    font-family: 'Roboto Slab', serif;
  }

  html, body {
    height: 100%;
    background-color: #ddd;
  }

  body {
    margin: 0;
  }
`;

export default Global;
