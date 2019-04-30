import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import IconCodePen from "../../svgComponents/IconCodePen";
import IconGithub from "../../svgComponents/IconGithub";
import IconReact from "../../svgComponents/IconReact";
import IconCloud from "../../svgComponents/IconCloud";

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

const W3C = () => {
  return (
    <Wrapper>
      <div>
        <a href="https://reactjs.org/" target="_blank">
          <div style={{ width: "64px", height: "64px", background: "#000" }}>
            <IconReact />
          </div>
        </a>

        <a
          href="https://aws.amazon.com/"
          target="_blank"
          style={{ color: "#fff" }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#000",
              marginTop: "24px"
            }}
          >
            <IconCloud />
            <span
              style={{
                position: "absolute",
                top: "20px",
                left: "14px",
                fontSize: "16px",
                color: "#fff"
              }}
            >
              AWS
            </span>
          </div>
        </a>

        <a href="https://github.com/" target="_blank">
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#000",
              marginTop: "24px"
            }}
          >
            <IconGithub />
          </div>
        </a>

        <a href="https://codepen.io/" target="_blank">
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#000",
              paddingTop: "8px",
              marginTop: "24px"
            }}
          >
            <IconCodePen />
          </div>
        </a>

        <a href="https://www.styled-components.com/" target="_blank">
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#000",
              paddingTop: "12px",
              marginTop: "16px"
            }}
          >
            <img
              src="https://www.styled-components.com/static/icon.png"
              width="56"
              height="26"
            />
          </div>
        </a>
      </div>
      <p className="vertical-text">Used technologies</p>
    </Wrapper>
  );
};

export default W3C;
