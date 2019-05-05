import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import linksData from "../../src/linksData";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import * as Layout from "../components/shared/Layout";
import "../assets/css/react-accessible-accordion.css";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import W3C from "../components/shared/W3C";
import Remote from "../assets/img/remote.gif";
import RemoteA from "../assets/img/remote_a.gif";
import media from "../mediaTemplate";

const Lists = styled.div`
  ul {
    list-style: none;
  }
`;

const ExternalLink = styled.div`
  padding-left: 16px;
  background: url(${Remote}) no-repeat 0 8px;
  text-align: left;
  &:hover {
    background: #e2e2e2 url(${RemoteA}) no-repeat 0 8px;
  }
`;

class Links extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newwin: true
    };

    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange() {
    this.setState({ newwin: !this.state.newwin });
  }

  renderSection(section, links) {
    return (
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <span />
            {section}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <ul>
            {links.map(item => this.renderExternalLink(item.url, item.title))}
          </ul>
        </AccordionItemPanel>
      </AccordionItem>
    );
  }

  renderExternalLink(href, title) {
    return (
      <li>
        <ExternalLink>
          <a
            href={href}
            rel="noopener"
            target={this.state.newwin ? "_blank" : "_self"}
          >
            {title}
          </a>
        </ExternalLink>
      </li>
    );
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

        <main
          className="content-area page foldtl"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <div style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Layout.H1>Web Pro Links</Layout.H1>
            <NewWindow
              num={this.state.newwin}
              toggleCheckboxChange={this.toggleCheckboxChange}
            />
            <Lists>
              <div className="links-container">
                <Accordion allowZeroExpanded="true">
                  {linksData.allLinks.map(item =>
                    this.renderSection(item.section, item.links)
                  )}
                </Accordion>
              </div>
            </Lists>
            {/*
            <iframe
              src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com/links.php"
              target={this.state.newwin ? "_blank" : "_self"}
              scrolling="no"
              frameBorder="0"
              style={{ border: "none", width: "450px", height: "80px" }}
            />
            */}
          </div>
        </main>
        <Footer />
        <aside className="right-sidebar">
          <div className="quot">
            <blockquote style={{ transform: "rotate(-5deg)" }}>
              <span className="first-letter">S</span>hare your knowledge. It is
              a way to achieve immortality.
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

export default Links;

/*

https://www.hongkiat.com/blog/css-encoded-image/
https://www.sitepoint.com/introducing-css-clip-path-property/
https://css-tricks.com/the-shapes-of-css/
https://www.smashingmagazine.com/2015/05/creating-responsive-shapes-with-clip-path/

https://vimeo.com/156115570

https://codepen.io/noeldelgado/pen/ByxQjL
https://css-tricks.com/perfect-full-page-background-image/

https://medium.com/design-story/story-map-3cc64033128e

https://codepen.io/sdras/pen/NqYGZv

https://www.smashingmagazine.com/2019/04/art-direction-for-the-web-using-css-shapes/

https://twitter.com/shshaw
https://codepen.io/shshaw/full/LVKEdv
https://codepen.io/chriscoyier/pen/YyxKea
https://codepen.io/sdras/pen/gWWQgb


https://medium.com/s/user-friendly

https://webanimationworkshops.com/

https://codepen.io/netsi1964/full/pJzWoz

https://codepen.io/anthonydugois/pen/mewdyZ
https://www.jasondavies.com/animated-bezier/

https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/
https://css-tricks.com/accessible-svgs/

https://jakearchibald.github.io/svgomg/
http://petercollingridge.appspot.com/svg-editor
https://github.com/svg/svgo
https://github.com/svg/svgo-gui

https://inkscape.org/
https://codepen.io/sdras/full/xbyopy




http://slides.com/sdrasner/adv-svg-2?token=FxyYIMcu#/1



https://pudding.cool/2017/03/hamilton/
http://cubic-bezier.com/#.17,.67,.86,.25

https://greensock.com

https://css-tricks.com/debugging-css-keyframe-animations/
https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/

http://eng.wealthfront.com/2015/06/30/implementing-netflix-redesign/
https://codepen.io/sdras/full/JobJMO

https://codepen.io/sdras/full/Wramvo

https://medium.com/s/user-friendly/the-product-design-framework-you-never-knew-you-needed-567550960f8f

https://medium.com/s/user-friendly


https://vuejs.org/v2/cookbook/editable-svg-icons.html
https://codepen.io/sdras/pen/Kwjyzo
https://rosenfeldmedia.com/books/designing-interface-animation/


https://css-tricks.com/the-importance-of-context-shifting-in-ux-patterns/
https://codepen.io/sdras/pen/waXKPw

https://github.com/sdras/vue-weather-notifier

https://codepen.io/sdras/pen/MYQxXe

https://codepen.io/sdras/pen/YyXewa

https://codepen.io/sdras/pen/RZGqxR

https://codepen.io/sdras/pen/RZGqxR

https://codepen.io/sdras/pen/f4e735983d9972abd35d74062ea0e543#0

https://codepen.io/sdras/pen/eKLeao

https://vimeo.com/292473138

https://css-tricks.com/masking-vs-clipping-use/

https://bennettfeely.com/clippy/

https://codepen.io/sdras/pen/BReNEN

https://codepen.io/yoksel/



https://css-tricks.com/mega-list-svg-information/
https://www.bustle.com/flowcharts

https://css-tricks.com/having-fun-with-link-hover-effects/






https://wsvincent.com/install-python3-mac/
https://stackoverflow.com/questions/34573159/how-to-install-pip3-on-my-mac  // pip3 
/*
// curl -O https://bootstrap.pypa.io/get-pip.py
// sudo python3 get-pip.py

https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
// $ pip3 install awscli --upgrade --user

https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html

http://www.mtcc.io/blog-host.html

Personal website: green-beast.com


https://tutorialzine.com/2015/05/simplify-your-stylesheets-with-the-magical-css-viewport-units

https://css-tricks.com/using-svg/

https://onextrapixel.com/unusual-and-creative-angles-and-shapes-in-website-design/

https://onextrapixel.com/unusual-and-creative-angles-and-shapes-in-website-design/




*/
