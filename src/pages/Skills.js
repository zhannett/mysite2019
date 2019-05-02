import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Link } from "@reach/router";

import styled from "@emotion/styled";

import * as Layout from "../components/shared/Layout";
import W3C from "../components/shared/W3C";
import Header from "../components/shared/Header";
import media from "../mediaTemplate";
import SmallStar from "../svgComponents/SmallStar";
import MediumOrangeStar from "../svgComponents/MediumOrangeStar";
import Remote from "../assets/img/remote.gif";
import RemoteA from "../assets/img/remote_a.gif";

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

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
`;

const ExternalLink = styled.div`
  display: inline;
  flex-direction: row;
  padding-left: 16px;
  background: url(${Remote}) no-repeat 0 8px;
  ${media.phone`
    flex-direction: column;
  `};
  &:hover {
    background: #e2e2e2 url(${RemoteA}) no-repeat 0 8px;
  }
`;

const Certificates = styled.div`
  ul {
    list-style: none;
    a {
      font-size: large;
    }
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

const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );

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
            <dl>
              <DT>Operating Systems:</DT>
              <DD>Mac OS X, Windows XP+</DD>
            </dl>
            <dl>
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
            </dl>
            <dl>
              <DT>Front-End Build Tools:</DT>
              <DD>npm scripts , Yeoman.io, Bower, Grunt, Gulp, ant</DD>
            </dl>
            <dl>
              <DT>Unit testing:</DT>
              <DD>Jest / Enzyme, Jasmine, Karma / PhantomJS</DD>
            </dl>
            <dl>
              <DT>Technologies:</DT>
              <DD>XML, JSP, ASP, OOD, RDBMS, AJAX</DD>
            </dl>
            <dl>
              <DT>Code Review Tools:</DT>
              <DD>Bitbucket , Phabricator</DD>
            </dl>
            <dl>
              <DT>Technologies:</DT>
              <DD>
                SPA (Single Page applications), MVC architecture, RESTful web
                services, mobile web development, XML, ASP, OOD, RDBMS, AJAX,
                I18N (internationalization), Apache Cordova
              </DD>
            </dl>
            <dl>
              <DT>Version Control:</DT>
              <DD>GIT, Perforce, CVS, Visual SourceSafe (VSS), StarTeams </DD>
            </dl>
            <dl>
              <DT>Project Management:</DT>
              <DD>JIRA, Confluence, VersionOne, Agile</DD>
            </dl>
            <dl>
              <DT>Web:</DT>
              <DD>
                Web / mobile information architecture, wireframe design, layouts
                including flex- and grid-based layouts, templates, web
                usability, UX, accessibility / WCAG 2.0 / AODA / ADA / Section
                508, W3C-compliancy, cross-browser and cross-platform
                compatibility; SEO; web / mobile applications performance
                optimization, Google Analytics, StatsCounter, progressive
                enhancement methodology, user-centric development / design,
                responsive web design, JSLint, Amazon s3
              </DD>
            </dl>
            <dl>
              <DT>Software:</DT>
              <DD>
                MS Office (MS Word, MS Excel, MS Access, MS Power Point), Lotus
                Notes, Adobe Suite, Eclipse, phpMyAdmin, IntelliJ IDEA,
                WebStorm, Stripe
              </DD>
            </dl>

            <Layout.H1>Certificates</Layout.H1>
            <Certificates>
              <ul data-behavior="smartLinks" style={{ paddingLeft: 0 }}>
                <li>
                  <span>
                    <strong>2005</strong> -{" "}
                  </span>
                  <ExternalLink>
                    <Link
                      to="img/certificates/css.jpg"
                      target="_blank"
                      alt="CSS2 Certificate"
                    >
                      <strong>CSS2</strong> Certificate
                    </Link>
                  </ExternalLink>
                </li>
                <li>
                  <span>
                    <strong>2005</strong> -{" "}
                  </span>
                  <ExternalLink>
                    <Link
                      to="img/certificates/xml.jpg"
                      target="_blank"
                      alt="XML Certificate"
                    >
                      <strong>XML</strong> Certificate
                    </Link>
                  </ExternalLink>
                </li>
                <li>
                  <span>
                    <strong>2005</strong> -{"  "}
                  </span>
                  <ExternalLink>
                    <Link
                      to="img/certificates/php.jpg"
                      target="_blank"
                      alt="PHP4 Certificate"
                    >
                      <strong>PHP4</strong> Certificate
                    </Link>
                  </ExternalLink>
                </li>
                <li>
                  <span>
                    <strong>2005</strong> - {"  "}
                  </span>
                  <ExternalLink>
                    <Link
                      to="img/certificates/js.jpg"
                      target="_blank"
                      alt="JavaScript Certificate"
                    >
                      <strong>JavaScript</strong> Certificate
                    </Link>
                  </ExternalLink>
                </li>
                <li>
                  <span>
                    <strong>2002</strong> -{" "}
                  </span>
                  <ExternalLink>
                    <Link
                      to="img/certificates/oracle.jpg"
                      target="_blank"
                      alt="SQL and PL/SQL Certificate"
                    >
                      <strong>SQL and PL/SQL</strong> Certificate
                    </Link>
                  </ExternalLink>
                </li>
                <li>
                  <span>
                    <strong>2000</strong> -{" "}
                  </span>
                  <ExternalLink>
                    <Link
                      to="/img/certificates/sql.jpg"
                      target="_blank"
                      alt="MS SQL Server 6.5 Certificate"
                    >
                      <strong>MS SQL Server 6.5</strong> Certificate
                    </Link>
                  </ExternalLink>
                </li>
                {/*
                <li>
                  <p>
                    Click to reveal a secret:
                    <ToggleContent
                      toggle={show => <button onClick={show}>Open</button>}
                      content={hide => (
                        <>
                          {this.renderOverlay()}
                          <Modal>
                            <div className="overlay">
                              <div className="modal-content">
                                <img
                                  src="http://janetkulyk.s3.amazonaws.com/img/certificates/sql.jpg"
                                  title=""
                                />
                                <button onClick={hide}>Close</button>
                              </div>
                            </div>
                          </Modal>
                        </>
                      )}
                    />
                  </p>
                </li>
                      */}
              </ul>
            </Certificates>

            {/*
                    <ul className="gallery">
                        <li><a href="http://janetkulyk.s3.amazonaws.com/img/certificates/sql.jpg" className="certimg" rel="prettyPhoto[gallery]" title="SQL Server Certificate"><img src="<?php echo $media ?>certificates/sql-thumb.jpg" width="120" height="91" alt="SQL Server Certificate" /></a></li>
                        <li><a href="http://janetkulyk.s3.amazonaws.com/img/certificates/php.jpg" className="certimg" rel="prettyPhoto[gallery]" title="PHP Certificate"><img src="<?php echo $media ?>certificates/php-thumb.jpg"  width="120" height="91"alt="PHP Certificate" /></a></li>
                        <li><a href="http://janetkulyk.s3.amazonaws.com/img/certificates/js.jpg" className="certimg" rel="prettyPhoto[gallery]" title="JavaScript Certificate"><img src="<?php echo $media ?>certificates/js-thumb.jpg" width="120" height="91" alt="JavaScript Certificate" /></a></li>
                        <li><a href="http://janetkulyk.s3.amazonaws.com/img/certificates/xml.jpg" className="certimg" rel="prettyPhoto[gallery]" title="XML Certificate"><img src="<?php echo $media ?>certificates/xml-thumb.jpg" width="120" height="91" alt="XML Certificate" /></a></li>
                        <li><a href="http://janetkulyk.s3.amazonaws.com/img/certificates/css.jpg" className="certimg" rel="prettyPhoto[gallery]" title="CSS2 Certificate"><img src="<?php echo $media ?>certificates/css-thumb.jpg" width="120" height="91"alt="CSS2 Certificate" /></a></li>
                        <li><a href="http://janetkulyk.s3.amazonaws.com/img/certificates/oracle.jpg" className="certimg" rel="prettyPhoto[gallery]" title="Oracle certificate"><img src="<?php echo $media ?>certificates/oracle-thumb.jpg" width="91" height="120"alt="Oracle certificate" /></a></li>
                    </ul>
                    */}
            {/*<iframe src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com/skills.php" scrolling="no" frameBorder="0" style="border:none; width:450px; height:80px"></iframe>*/}
          </div>
        </main>
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
