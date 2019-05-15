import React, { Component } from "react";
import styled from "styled-components";

import * as Layout from "../components/shared/Layout";
import media from "../mediaTemplate";
import LinkedIn from "../svgComponents/LinkedIn";
import myPhotoWebp from "../assets/img/me3.webp";
import myPhotoPng from "../assets/img/me3.png";

const Portrait = styled.div`
  height: 200px;
  ${media.desktop`
    height: 190px;
  `}
  ${media.tablet`
    height: 136px;
  `}
  ${media.phone`
    height: 120px;
  `};
  img {
    height: 100%;
    border-radius: 50%;
  }
`;

const Promo = styled.div`
  width: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto 8px auto;
  p {
    text-align: right;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.4;
    margin: 24px 0;
    ${media.desktop`
      font-size: 1.2rem;
      line-height: 1.2;
  `}
    ${media.tablet`
      line-height: 1;
      margin: 32px 0;
  `}
    ${media.phone`
      line-height: 1;
      margin: 16px 0;
    `};
    &:first-of-type {
      animation: typing 4s steps(16, end);
    }
  }
  div:first-of-type {
    width: calc(100% - 260px);
  }
`;

const Focus = styled.div`
  display: block;
  column-count: 2;
  margin-top: 1rem;
  ${media.desktop`
  column-count: 1;
  `};
  p {
    line-height: 1.4;
    padding-top: 1rem;
    text-align: justify;
    font-size: medium;
    font-feature-settings: "onum" 1, "pnum" 1, "kern" 1, "ss01" 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const FirstLetter = styled.span`
  font-size: 2rem;
  line-height: 0.7;
  color: var(--color-tomato);
  font-family: "Rouge Script";
`;

const Welcome = () => {
  return (
    <div>
      <Layout.H1>Welcome!</Layout.H1>
      <a
        href="https://www.linkedin.com/in/janetkulyk/"
        rel="noopener"
        target="_blank"
        title="Janet Kulyk's LinkedIn Profile"
      >
        <Layout.LinkedInContainer>
          <LinkedIn />
        </Layout.LinkedInContainer>
      </a>

      <Promo>
        <div style={{ width: "auto", marginRight: "1rem" }}>
          <p style={{ color: "rgba(0,0,0,0.8)" }}>Hi!</p>
          <p style={{ color: "rgba(0,0,0,0.7)" }}>I'm Janet Kulyk.</p>
          <p style={{ color: "rgba(0,0,0,0.6)" }}>I'm a Front-End Developer.</p>
        </div>
        <Portrait>
          <picture>
            <source srcset={myPhotoWebp} type="image/webp" />
            <source srcset={myPhotoPng} type="image/png" />
            <img src={myPhotoPng} alt="My Photo" />
          </picture>
        </Portrait>
      </Promo>
      <Focus>
        <p>
          <FirstLetter>I</FirstLetter> build web and mobile web applications for
          large corporations and small businesses. Sometimes I work as a
          one-person web agency.
        </p>
        <p>
          <FirstLetter>M</FirstLetter>y current focus is Full Stack JavaScript
          application development for all spectrum of devices, responsive web
          design, performance optimization, web standards, user experience,
          accessibility, cross-browser and cross-platform development.
        </p>
        <p>
          <FirstLetter>T</FirstLetter>his web site highlights some of my
          professional skills, contains reference materials and links, has some
          fun pages, and serves as a sandbox for playing with new code.
        </p>
        <p>
          <FirstLetter>I</FirstLetter> speak English, Russian, and Ukrainian.
        </p>
        <p style={{ fontSize: "small" }}>
          JK IT Consulting, Ltd. is registered in Ontario, Canada, but the web
          allows me to collaborate no matter where you are in the world.
        </p>
      </Focus>
    </div>
  );
};

export default Welcome;
