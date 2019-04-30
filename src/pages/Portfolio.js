import React, { Component } from "react";
import styled from "@emotion/styled";

import * as Layout from "../components/shared/Layout";
import W3C from "../components/shared/W3C";
import Header from "../components/shared/Header";
import TopNav from "../components/shared/TopNav";

// $media = 'http://janetkulyk.s3.amazonaws.com/img/';

class Portfolio extends Component {
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

        <main className="content-area">
            <Layout.H1>Portfolio</Layout.H1>
            <NewWindow
              num={this.state.newwin}
              toggleCheckboxChange={this.toggleCheckboxChange}
            />
            <p className="payattention">
              This list contains only links to existing public web sites. I
              worked on multiple commercial web applications as well, however,
              they are not public (please see my resume for details).
            </p>
            <ul className="portfolio" data-behavior="colorLinks">
              <li>
                <a
                  href="http://www.pialaw.ca"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.pialaw.ca
                </a>{" "}
                <span>
                  (developed image rotator with video player for landing page;
                  the player is implemented with <em>video</em> tag and fall
                  back to Flash player if <em>video</em> tag is not supported,
                  2012)
                </span>
              </li>
              <li>
                <a
                  href="http://m.janetkulyk.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  m.janetkulyk.com
                </a>{" "}
                <span>
                  (developed demo mobile web site from scratch; mobile site is
                  compatible with wide range of mobile devices)
                </span>
              </li>
              <li>
                <a
                  href="http://www.olg.ca/lotteries/games/howtoplay.do?game=rockpaperscissors"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.olg.ca/lotteries/games/howtoplay.do?game=rockpaperscissors
                </a>{" "}
                <span>
                  (developed code for Rock-Paper-Scissor web page, 2011 - 2012)
                </span>
              </li>
              <li>
                <a
                  href="http://www.dose.ca"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.dose.ca
                </a>{" "}
                <span>
                  (developed front-end for dose.ca re-design project, 2009)
                </span>
              </li>
              <li>
                <a
                  href="index.php"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.janetkulyk.com/
                </a>{" "}
                <span>
                  (applied Yahoo! template/grid architecture and re-wrote CSS
                  for the web site, 2009)
                </span>
              </li>
              <li>
                <a
                  href="http://cox.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  http://www.cox.com
                </a>{" "}
                <span>
                  (participated in re-designing Cox Communications, Inc. web
                  site, front end development, 2009)
                </span>
              </li>
              <li className="internal">
                <a
                  href="http://www.janetkulyk.com/game.php"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.janetkulyk.com/game.php
                </a>{" "}
                <span>(GWT, 2009)</span>
              </li>
              <li>
                <a
                  href="http://www.janetkulyk.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                  className="internal"
                >
                  www.janetkulyk.com
                </a>{" "}
                <span>
                  (Full re-design of the website; XHTML, CSS, JavaScript,
                  jQuery, PHP5, MySQL5, I18N, 2008 - 2009)
                </span>
              </li>
              <li>
                <a
                  href="http://www.thankyou.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.thankyou.com
                </a>{" "}
                <span>
                  (developed semantic HTML templates for ThankYou Rewards
                  Network on-line shopping loyalty program for Citibank, 2008)
                </span>
              </li>
              <li>
                <a
                  href="http://www.toronto.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.toronto.com
                </a>{" "}
                <span>
                  (built dynamic features for websites in .NET framework using
                  TorStar Digital proprietary TOTEL technology and TOPS CMS, as
                  well as XML, XSLT, xPath, and Lucene search engine queries),
                  2007
                </span>
              </li>
              <li>
                <a
                  href="http://mobile.thestar.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  mobile.thestar.com
                </a>{" "}
                <span>
                  (developed mobile CMS-based website mobile.thestar.com), 2007
                </span>
              </li>
              <li>
                <a
                  href="http://www.mississauga.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.mississauga.com
                </a>{" "}
                <span>
                  (built dynamic features for websites in .NET framework using
                  TorStar Digital proprietary TOTEL technology and TOPS CMS, as
                  well as XML, XSLT, xPath, and Lucene search engine queries),
                  2007
                </span>
              </li>
              <li>
                <a
                  href="http://www.virginmobile.ca"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.virginmobile.ca
                </a>{" "}
                <span>
                  (designed and developed XHTML/CSS/SSI template architecture
                  for the whole website; developed clear, cross-browser
                  compatible, valid, CSS-based code according to W3C standards
                  for layouts, templates, web pages), 2005&nbsp;-&nbsp;2007
                </span>
              </li>
              <li>
                <a
                  href="http://www.canada.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.canada.com
                </a>{" "}
                <span>
                  (developed cross-browser compatible, valid, W3C compliant
                  XHTML code for layouts, templates, web pages for sections
                  &quot;Topics&quot; and &quot;Find it&quot;), 2005
                </span>
              </li>
              <li>
                <a
                  href="http://www.desiconnection.ca"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.desiconnection.ca
                </a>{" "}
                <span>
                  (PHP-MySQL, back end, admin site, connected back end with
                  front end), 2003
                </span>
              </li>
              <li>
                <a
                  href="http://www.preetlari.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.preetlari.com
                </a>{" "}
                <span>
                  (PHP-MySQL, back end, admin site, connected back end with
                  front end), 2003
                </span>
              </li>
              <li>
                <a
                  href="http://www.bhajanawali.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.bhajanawali.com
                </a>{" "}
                <span>
                  (PHP-MySQL, back end, admin site, connected back end with
                  front end), 2003
                </span>
              </li>
              <li>
                <a
                  href="http://www.punjabilehran.com"
                  target={this.state.newwin ? "_blank" : "_self"}
                >
                  www.punjabilehran.com
                </a>{" "}
                <span>
                  (PHP-MySQL, back end, admin site, connected back end with
                  front end), 2003
                </span>
              </li>
            </ul>
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com/portfolio.php"
            scrolling="no"
            frameBorder="0"
            style={{ border: "none", width: "450px", height: "80px" }}
          />
        </main>
        <aside className="right-sidebar">
          <div className="quot">
            <blockquote>
              We are all building the future through the work and the projects
              that we do today.
            </blockquote>
          </div>
          <div className="quot">
            <blockquote>
              In order that people may be happy in their work, these three
              things are needed: They must be fit for it. They must not do too
              much of it. And they must have a sense of success in it.
              <cite>John Ruskin, 1850</cite>
            </blockquote>
          </div>
          <div className="quot">
            <blockquote>
              The art of leadership is saying no, not yes. It is very easy to
              say yes.
              <cite>Tony Blair, UK Prime Minister, 1997 - 2007</cite>
            </blockquote>
          </div>
          <div className="quot">
            <blockquote>
              We shape our buildings: thereafter they shape us.
              <cite>Winston Churchill</cite>
            </blockquote>
          </div>
        </aside>
      </div>
    );
  }
}

function NewWindow({ checkboxChecked, toggleCheckboxChange }) {
  return (
    <div data-behavior="linksInNewWindow">
      <Layout.NewWindowChoice>
        <form className="newwindowlinks">
          <fieldset>
            <input
              type="checkbox"
              value={checkboxChecked}
              onChange={toggleCheckboxChange}
            />
            <label htmlFor="newwin">Open links in new window?</label>
          </fieldset>
        </form>
      </Layout.NewWindowChoice>
    </div>
  );
}

export default Portfolio;
