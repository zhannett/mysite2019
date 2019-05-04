import React, { Component } from "react";
import styled from "@emotion/styled";

import * as Layout from "../components/shared/Layout";
import media from "../mediaTemplate";
import LinkedIn from "../svgComponents/LinkedIn";

const Portrait = styled.div`
  min-width: 220px;
  height: 220px;
  background: url("../img/me3.png");
  clip-path: circle(50%);
  ${media.desktop`
    min-width: 190px;
    height: 190px;
    clip-path: circle(%);
  `};
  ${media.tablet`
    min-width: 180px;
    height: 180px;
    clip-path: circle(%);
  `};
  ${media.phone`
    min-width: 170px;
    height: 170px;
    clip-path: circle(45%);
  `};
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
  `};
    ${media.tablet`
      font-size: 1.2rem;
      line-height: 1;
      margin: 32px 0;
  `};
    ${media.phone`
      font-size: 1.2rem;
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

class Welcome extends Component {
  render() {
    return (
      <div>
        <Layout.H1>Welcome!</Layout.H1>
        <Layout.LinkedInContainer>
          <a
            href="https://www.linkedin.com/in/janetkulyk/"
            rel="noopener"
            target="_blank"
            title="Janet Kulyk's LinkedIn Profile"
          >
            <LinkedIn />
          </a>
        </Layout.LinkedInContainer>
        <Promo>
          <div style={{ width: "auto", marginRight: "1rem" }}>
            <p style={{ color: "rgba(0,0,0,0.8)" }}>Hi!</p>
            <p style={{ color: "rgba(0,0,0,0.7)" }}>I'm Janet Kulyk.</p>
            <p style={{ color: "rgba(0,0,0,0.6)" }}>
              I'm a Front-End Developer.
            </p>
          </div>
          <Portrait />
        </Promo>
        <Focus>
          <p>
            <span className="first-letter">I</span> build web and mobile web
            applications for large corporations and small businesses. Sometimes
            I work as a one-person web agency.
          </p>
          <p>
            <span className="first-letter">M</span>y current focus is Full Stack
            JavaScript application development for all spectrum of devices,
            responsive web design, performance optimization, web standards, user
            experience, accessibility, cross-browser and cross-platform
            development.
          </p>
          <p>
            <span className="first-letter">T</span>his web site highlights some
            of my professional skills, contains reference materials and links,
            has some fun pages, and serves as a sandbox for playing with new
            code.
          </p>
          <p>
            <span className="first-letter">I</span> speak English, Russian, and
            Ukrainian.
          </p>
          <p style={{ fontSize: "small" }}>
            JK IT Consulting, Ltd. is registered in Ontario, Canada, but the web
            allows me to collaborate no matter where you are in the world.
          </p>
        </Focus>
      </div>
    );
  }
}

export default Welcome;
