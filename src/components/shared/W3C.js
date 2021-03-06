import React, { Component } from "react";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import IconCodePen from "../../svgComponents/IconCodePen";
import IconGithub from "../../svgComponents/IconGithub";
import IconReact from "../../svgComponents/IconReact";
import IconCloud from "../../svgComponents/IconCloud";
import CSS3 from "../../svgComponents/CSS3";
import travisPng from "../../assets/img/travis.png";
import travisWebp from "../../assets/img/travis.webp";

const Wrapper = styled.div`
  display: flex;
  a,
  a:visited {
    color: #444;
  }
  a:hover {
    color: #fff;
  }
  a:active {
    color: #000;
    background-color: transparent;
  }
  a:hover:before {
    background: transparent;
  }
`;

const LogoContainer = styled.div`
  width: 64px;
  height: 64px;
  background: #333;
  margin-top: 16px;
`;

const VerticalText = styled.p`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  letter-spacing: 4px;
  word-spacing: 8px;
  text-align: center;
  margin: 0;
  font-size: 16px;
  color: var(--color-lightskyblue);
`;

class W3C extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <div>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener"
            alt="React.js"
            aria-label="React.js"
          >
            <LogoContainer data-tip="React.js" style={{ marginTop: 0 }}>
              <IconReact />
              <ReactTooltip />
            </LogoContainer>
          </a>

          <a
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noopener"
            style={{ color: "#fff" }}
            alt="Amazon Web Services"
            aria-label="Amazon Webservices"
          >
            <LogoContainer
              data-tip="Amazon Web Services"
              style={{ writingMode: "horizontal-tb", position: "relative" }}
            >
              <IconCloud />
              <span
                style={{
                  position: "absolute",
                  width: "40px",
                  top: "22px",
                  left: "14px",
                  fontSize: "16px",
                  color: "#fff"
                }}
              >
                AWS
              </span>
              <ReactTooltip />
            </LogoContainer>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            alt="Github"
            aria-label="Github"
          >
            <LogoContainer data-tip="Github">
              <IconGithub />
              <ReactTooltip />
            </LogoContainer>
          </a>

          <a
            href="https://codepen.io/"
            target="_blank"
            rel="noopener"
            alt="CodePen"
            aria-label="CodePen"
          >
            <LogoContainer
              data-tip="CodePen"
              style={{ paddingTop: "8px", paddingLeft: "8px" }}
            >
              <IconCodePen />
              <ReactTooltip />
            </LogoContainer>
          </a>

          <a
            data-tip="styled-components"
            href="https://www.styled-components.com/"
            target="_blank"
            rel="noopener"
            alt="styled-components"
          >
            <LogoContainer style={{ paddingTop: "10px", paddingLeft: "4px" }}>
              <span style={{ color: "#fff", fontSize: "16px" }}>&lt;</span>
              <span style={{ fontSize: "28px" }}> 💅</span>
              <span style={{ color: "#fff", fontSize: "16px" }}>&gt;</span>
              <ReactTooltip />
            </LogoContainer>
          </a>

          <LogoContainer
            data-tip="CSS3"
            style={{
              paddingTop: "12px",
              position: "relative"
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "2px",
                left: "-7px",
                overflow: "visible"
              }}
            >
              <CSS3 />
            </span>
            <ReactTooltip />
          </LogoContainer>

          <LogoContainer
            data-tip="Travis"
            style={{
              paddingTop: "12px",
              position: "relative"
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "4px",
                left: "4px",
                overflow: "visible"
              }}
            >
              <picture>
                <source srcSet={travisWebp} type="image/webp" />
                <source srcSet={travisPng} type="image/png" />
                <img src={travisPng} alt="Travis" />
              </picture>
            </span>
            <ReactTooltip />
          </LogoContainer>
        </div>
        <VerticalText>Used technologies</VerticalText>
      </Wrapper>
    );
  }
}

export default W3C;
