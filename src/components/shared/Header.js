import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Clock from "./Clock";
import media from "../../mediaTemplate";
import TopNav from "./TopNav";

/*
background: linear-gradient(
    -45deg,
    ${colors.darkorange},
    ${colors.dodgerblue}
  );
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
*/

const Banner = styled.div`
  height: 80px;
  line-height: 80px;
  text-align: left;
  padding: 0 64px;
  background-color: rgb(53, 57, 61);
  z-index: 100;
  border-bottom-right-radius: 100px;
  align-items: center;
  
  ${media.desktop`
    height: 60px;
    line-height: 60px;
  `}
  ${media.tablet`
    height: 60px
    line-height: 60px;
  `}
  ${media.phone`
    height: 56px;
    line-height: 56px;
    justify-content: flex-start;
    padding: 0 1.5rem;
  `};
`;

const Logo = styled.span`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 5rem;
  background: transparent;
  ${media.desktop`
    font-size: 1.5rem;
    margin-right: 1rem;
  `}
  ${media.tablet`
    font-size: 1.2rem;
  `}
  ${media.phone`
    margin-right: 0.5rem;
    line-height: 48px;
  `};
  a,
  a:hover,
  a:visited {
    color: var(--color-salmon);
    text-decoration: none;
  }
`;

const Name = styled.span`
  font-size: 2rem;
  color: var(--color-lightskyblue);
  ${media.desktop`
    font-size: 1.5rem;
  `}
  ${media.tablet`
    font-size: 1.2rem;
  `}
  ${media.phone`
    font-size: 1.1rem;
  `};
`;
/*
background: linear-gradient(
    330deg,
    #e05252 0%,
    #99e052 25%,
    #52e0e0 50%,
    #9952e0 75%,
    #e05252 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
*/

const DateTimeContainer = styled.div`
  text-align: right;
  background: transparent;
  color: #444;
  margin-right: -24px;
`;

const Header = () => {
  return (
    <>
      <Banner role="banner">
        <Logo>
          <Link to="/" style={{ background: "transparent" }}>
            &lt;JK /&gt;
          </Link>
        </Logo>
        <Name>Janet's Personal Website</Name>
        <DateTimeContainer>
          <Clock style={{ width: "100px", height: "100px" }} />
        </DateTimeContainer>
      </Banner>
      <TopNav />
    </>
  );
};

export default Header;

/*
header::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: url(divider.svg);
}

header::after polygon {
  fill: white;
}

mediumorchid: "#d251d4",
  palevioletred: "#ea639e"


  royalblue: "#2743c0",
  aquamarine: "#7af3e0",
*/
