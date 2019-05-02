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

// background: linear-gradient(90deg, #2743c0, #ea639e);

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
  `};
  ${media.tablet`
    font-size: 1.2rem;
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

const DateTime = styled.div`
  font-family: Georgia, "Times New Roman", Times, serif;
  text-align: right;
  background: transparent;
  padding: 0 10px 5px 0;
  color: #666;
`;

class Header extends Component {
  render() {
    return (
      <>
        <Banner role="banner">
          <Logo>
            <Link to="/" style={{ background: "transparent" }}>
              &lt;JK /&gt;
            </Link>
          </Logo>
          <Name>Janet's Personal Website</Name>
          {/*<DateTime>
            <Clock />
          </DateTime>*/}
        </Banner>
        <TopNav />
      </>
    );
  }
}

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
