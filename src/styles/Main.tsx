import styled from "styled-components";

export const MainWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: 150px 1fr 100px;
  grid-template-columns: 1fr;
  height: 100%;
  grid-gap: 10px;
  min-height: 100vh;

  margin: auto;
  max-width: 80vw;
`;

export const Header = styled.header`
  grid-area: header;
`;

export const Main = styled.main`
  grid-area: content;
`;

export const Footer = styled.footer`
  grid-area: footer;
`;
