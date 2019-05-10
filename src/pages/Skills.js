import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Link } from "@reach/router";

import styled from "@emotion/styled";

import * as Layout from "../components/shared/Layout";
import W3C from "../components/shared/W3C";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import Certificates from "../components/Certificates";
import media from "../mediaTemplate";
import SmallStar from "../svgComponents/SmallStar";
import MediumOrangeStar from "../svgComponents/MediumOrangeStar";
import Remote from "../assets/img/remote.gif";
import RemoteA from "../assets/img/remote_a.gif";
import LinkedIn from "../svgComponents/LinkedIn";

const DL = styled.div`
  width: 100%;
  padding: 4px;
`;

const DT = styled.div`
  display: block;
  font-weight: 700;
  color: var(--color-cornflowerblue);
  font-size: medium;
  vertical-align: top;
  ${media.phone`
    display: block;
    width: 100%;
  `};
`;

const DD = styled.div`
  display: block;
  padding: 2px 0 2px 8px;
  font-size: medium;
  vertical-align: top;
  margin-left: 16px;
  ${media.phone`
    display: block;
    width: 100%;
    padding: 0;
  `};
  ul {
    list-style: none;
    ${media.phone`
      padding-left: 1rem;
    `};
  }
  > ul {
    padding-left: 0;
  }
`;

const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = React.useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);
  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newwin: false
    };

    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange() {
    this.setState({ newwin: !this.state.newwin });
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
        <main className="content-area page foldtl" style={{ padding: 0 }}>
          <div>
            <Layout.H1>Professional Skills</Layout.H1>
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
            <DL>
              <DT>Operating Systems:</DT>
              <DD>Mac OS X, Windows XP+</DD>
            </DL>
            <DL>
              <DT>Programming Languages:</DT>
              <DD>
                <ul>
                  <li>
                    <MediumOrangeStar /> HTML5, HTML/XHTML/semantic HTML;
                  </li>
                  <li>
                    <MediumOrangeStar /> CSS3 (including flexbox, grid);
                  </li>
                  <li>
                    <MediumOrangeStar /> CSS tools:
                    <ul>
                      <li>
                        <SmallStar /> Precompilers: SASS, LESS
                      </li>
                      <li>
                        <SmallStar /> Frameworks: Bootstrap, Ionic
                      </li>
                      <li>
                        <SmallStar /> Responsive Design with CSS3 (including
                        flexbox, grid)
                      </li>
                    </ul>
                  </li>
                  <li>
                    <MediumOrangeStar /> JavaScript:
                    <ul>
                      <li>
                        <SmallStar /> React.js, Redux
                      </li>
                      <li>
                        <SmallStar /> ES6
                      </li>
                      <li>
                        <SmallStar /> DOM-scripting, jQuery
                      </li>
                      <li>
                        <SmallStar /> OO-JavaScript
                      </li>
                      <li>
                        <SmallStar /> JavaScript frameworks: React.js,
                        AngularJS, knockoutJS, Dojo
                      </li>
                      <li>
                        <SmallStar /> node.js, Express, npm, yarn, Nginx
                      </li>
                    </ul>
                  </li>
                  <li>
                    <MediumOrangeStar /> JSON, XML/XSL(XPath, XSLT);
                  </li>
                  <li>
                    <MediumOrangeStar /> MEAN stack
                    (MongoDB-Express-AngularJS-NodeJS)
                  </li>
                  <li>
                    <MediumOrangeStar /> PHP 3/4/5
                  </li>
                  <li>
                    <MediumOrangeStar /> SQL
                  </li>
                </ul>
              </DD>
            </DL>
            <DL>
              <DT>Front-End Build Tools:</DT>
              <DD>npm scripts , Yeoman.io, Bower, Grunt, Gulp, ant</DD>
            </DL>
            <DL>
              <DT>AWS:</DT>
              <DD>s3, Cloudfront</DD>
            </DL>
            <DL>
              <DT>DevOps:</DT>
              <DD>Travis CI</DD>
            </DL>
            <DL>
              <DT>Unit testing:</DT>
              <DD>Jest / Enzyme, Jasmine, Karma / PhantomJS</DD>
            </DL>
            <DL>
              <DT>Technologies:</DT>
              <DD>XML, JSP, ASP, OOD, RDBMS, AJAX</DD>
            </DL>
            <DL>
              <DT>Code Review Tools:</DT>
              <DD>Bitbucket , Phabricator</DD>
            </DL>
            <DL>
              <DT>Technologies:</DT>
              <DD>
                SPA (Single Page applications), MVC architecture, RESTful web
                services, mobile web development, XML, ASP, OOD, RDBMS, AJAX,
                I18N (internationalization), Apache Cordova
              </DD>
            </DL>
            <DL>
              <DT>Version Control:</DT>
              <DD>GIT, Perforce, CVS, Visual SourceSafe (VSS), StarTeams </DD>
            </DL>
            <DL>
              <DT>Project Management:</DT>
              <DD>JIRA, Confluence, VersionOne, Agile</DD>
            </DL>
            <DL>
              <DT>Web:</DT>
              <DD>
                Web / mobile information architecture, wireframe design, layouts
                including flex- and grid-based layouts, templates, web
                usability, UX, accessibility / WCAG 2.0 / AODA / ADA / Section
                508, W3C-compliancy, cross-browser and cross-platform
                compatibility; SEO; web / mobile applications performance
                optimization, Google Analytics, StatsCounter, progressive
                enhancement methodology, user-centric development / design,
                responsive web design, JSLint, Amazon s3, Amazon Cloudfront
              </DD>
            </DL>
            <DL>
              <DT>Software:</DT>
              <DD>
                MS Office (MS Word, MS Excel, MS Access, MS Power Point), Lotus
                Notes, Adobe Suite, Eclipse, phpMyAdmin, IntelliJ IDEA,
                WebStorm, Stripe
              </DD>
            </DL>
            <Certificates />
            {/*<iframe src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com/skills.php" scrolling="no" frameBorder="0" style="border:none; width:450px; height:80px"></iframe>*/}
          </div>
        </main>
        <Footer />
        <aside className="right-sidebar">
          <blockquote style={{ transform: "rotate(-5deg)" }}>
            <span className="first-letter">W</span>e are all building the future
            through the work and the projects that we do today.
          </blockquote>
          <blockquote style={{ transform: "rotate(5deg)" }}>
            <span className="first-letter">W</span>e shape our buildings:
            thereafter they shape us.
            <cite>Winston Churchill</cite>
          </blockquote>
          <blockquote style={{ transform: "rotate(-5deg)" }}>
            <span className="first-letter">J</span>udge your success by what you
            had to give up in order to get it.
          </blockquote>
        </aside>
      </div>
    );
  }
}

export default Skills;
