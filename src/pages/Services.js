import React, { Component } from "react";
import styled from "@emotion/styled";

import * as Layout from "../components/shared/Layout";
import W3C from "../components/shared/W3C";
import Header from "../components/shared/Header";
import media from "../mediaTemplate";
import MediumOrangeStar from "../svgComponents/MediumOrangeStar";

const List = styled.ul`
  padding: 0;
  list-style: none;
  ${media.phone`
    padding: 0 ;
  `};
  li {
    display: block;
    padding: 0 0 0.5rem 0;
    font-size: medium;
    text-align: left;
    span {
      margin-left: 0.5rem;
      font-weight: 700;
      color: var(--color-cornflowerblue);
    }
`;

class Services extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <Header />
        </header>

        <aside className="left-sidebar">
          <W3C />
        </aside>

        <main className="content-area page foldtl" style={{ padding: 0 }}>
          <div>
            <Layout.H1>Services</Layout.H1>
            <List>
              <li>
                <MediumOrangeStar /> <span>Web Services:</span> domain
                registration, web hosting, concept development, content
                management (maintenance)
              </li>
              <li>
                <MediumOrangeStar /> <span>Web Design:</span> concept design and
                building web applications (desktop, tablet, mobile, responsive
                design)
              </li>
              <li>
                <MediumOrangeStar /> <span>Web Development:</span> programming
                and integration of web / mobile applications
              </li>
              <li>
                <MediumOrangeStar /> <span>Web Template Service:</span>{" "}
                converting your designs to HTML5, CSS3, and JavaScript
                templates, to React components that adhere to W3C standards and
                the highest level of accessibility
              </li>
              <li>
                <MediumOrangeStar /> <span>Website Assessment Report:</span>{" "}
                reviewing every aspect of your online presence and recommend
                cost-effective improvements.
              </li>
              <li>
                <MediumOrangeStar />{" "}
                <span>Website Performance Optimization:</span> analyzing the
                speed of your website, make recommendations, and implement
                solutions to make your website fast.
              </li>
              <li>
                <MediumOrangeStar /> <span>Internationalization:</span>{" "}
                developing multi-lingual websites or add additional languagues
                to your existing website.
              </li>
              <li>
                <MediumOrangeStar /> <span>Google Analytics</span> for your
                website.
              </li>
              <li>
                <MediumOrangeStar /> <span>Email Newsletters:</span> design,
                build, sending.
              </li>
            </List>
          </div>
        </main>
      </div>
    );
  }
}

export default Services;
