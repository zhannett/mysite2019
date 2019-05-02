import styled from "styled-components";

import media from "../../mediaTemplate";

export const Logo = styled.div`
  grid-area: logo;
  height: 100%;
  line-height: 3rem;
  grid-area: logo;
  align-self: center;
`;

export const MainMenu = styled.div`
  grid-area: menu;
  align-self: center;
  justify-self: end;
`;

export const ContentArea = styled.main`
  grid-area: content;
`;

export const Sidebar = styled.aside`
  grid-area: sidebar;
  padding: 1rem;
`;

export const SponsorsWrapper = styled.div`
  grid-area: sponsors;
`;

export const Footer = styled.div`
  grid-area: footer;
`;

export const Container = styled.div`
  display: grid | inline-grid;
  margin: 0 2rem;
  grid-template-columns: [content] 6fr [content] 4fr [sidebar] 2fr;
  grid-gap: 2rem 1rem;
  grid-template-rows: 3rem auto;
  grid-template-areas:
    "header header header"
    "content  content sidebar"
    "sponsors sponsors sponsors"
    "footer footer footer";
`;

export const Wrapper = styled.div`
  display: block;
  background: line-gradient(90deg, #2743c0, #ea639e);
`;

export const H1 = styled.h1`
  font-family: "Rouge Script";
  display: block;
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  color: var(--color-tomato);
`;

export const NewWindowChoice = styled.div`
  fieldset {
    padding: 4px 0;
    margin: 0 0 1rem 1rem;
    border: none;
    ${media.phone`
      width: calc(100% - 16px);
      padding-left: 16px;
      margin: 0 0 16px 0;
      box-sizing: border-box;
    `};
    }
  }
  label {
    width: 80%;
    text-align: left;
    font-weight: smaller;
    color: #626262;
    font-style: italic;
  }
  input {
    margin: 4px 8px 0 0;
  }
`;

// export const media = "http://janetkulyk.s3.amazonaws.com/img/";
