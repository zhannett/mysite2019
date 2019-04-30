import React, { Component } from "react";
import styled from "styled-components";

import * as Layout from "../components/shared/Layout";
import W3C from "../components/shared/W3C";
import Header from "../components/shared/Header";
import MapContainer from "../components/MapContainer";
import Globe from "../svgComponents/Globe";
import Home from "../svgComponents/Home";
import Email from "../svgComponents/Email";
import Phone from "../svgComponents/Phone";
import Skype from "../svgComponents/Skype";
import media from "../mediaTemplate";

const Blocks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  ${media.desktop`
    flex-direction: column;
  `};
`;

const Vcard = styled.div`
  margin-bottom: 8px;
  ${media.desktop`
      width: 100%;
  `};
  ul {
    padding: 0;
    margin: 0;
    li {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      ${media.phone`
        margin-bottom: 0.5rem;
      `};
      span {
        margin-left: 12px;
        font-size: medium;
      }
    }
  }
`;

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <aside className="left-sidebar">
          <W3C />
        </aside>

        <main className="content-area page foldtl">
          <div>
            <Layout.H1>Contact Info</Layout.H1>
            <Blocks>
              <Vcard>
                <ul>
                  <li>
                    <Globe />
                    <span>
                      <a href="http://www.janetkulyk.com/">
                        www.janetkulyk.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <Home />
                    <span>Toronto, ON, M5R 2W5, Canada</span>
                  </li>
                  <li>
                    <Email />
                    <span>
                      E-mail:{" "}
                      <a href="mailto:janetkulyk@yahoo.com">
                        janetkulyk@yahoo.com
                      </a>
                    </span>
                  </li>
                  <li>
                    <Phone />
                    <span>
                      Phone: <a href="tel:+14169294372">(416) 841-4372</a>
                    </span>
                  </li>
                  <li>
                    <Skype />
                    <span>Skype: janetkulyk</span>
                  </li>
                </ul>
              </Vcard>
              <MapContainer />
            </Blocks>
          </div>
        </main>
        {/*
			<h2>Contact Me</h2>											
			 include_once("forms/form_contactme.php")  */}

        <aside className="right-sidebar">
          <blockquote>Non progrede est regrede.</blockquote>
          <blockquote>Not going forward is coming back.</blockquote>
        </aside>
      </div>
    );
  }
}

export default Contact;
