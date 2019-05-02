import React, { Component } from "react";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
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

  renderExternalLink(href, title) {
    return (
      <li>
        <ExternalLink>
          <a href={href} target={this.state.newwin ? "_blank" : "_self"}>
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
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span />
                        General Links
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        {this.renderExternalLink(
                          "http://w3.org",
                          "World Wide Web Consortium"
                        )}
                        {this.renderExternalLink(
                          "http://validator.w3.org",
                          "W3C HTML Validation Service"
                        )}
                        {this.renderExternalLink(
                          "http://caniuse.com/",
                          "Can I Use?"
                        )}
                        {this.renderExternalLink(
                          "http://frontendmasters.com/",
                          "Frontend Masters"
                        )}
                        {this.renderExternalLink(
                          "http://egghead.io/",
                          "Egg Head"
                        )}
                        {this.renderExternalLink(
                          "http://www.sitepoint.com",
                          "Site Point"
                        )}
                        {this.renderExternalLink(
                          "http://developer.yahoo.com",
                          "Yahoo Develolper Networkt"
                        )}
                        {this.renderExternalLink(
                          "http://www.quirksmode.org",
                          "www.quirksmode.org"
                        )}
                        {this.renderExternalLink(
                          "http://www.w3schools.com/browsers/browsers_stats.asp",
                          "Browser Statistics"
                        )}
                        {this.renderExternalLink(
                          "https://www.creativebloq.com/net-magazine",
                          "Browser Statistics Net Magazine"
                        )}
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span /> JavaScript
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        {this.renderExternalLink(
                          "http://javascript.crockford.com/",
                          "Douglas Crockford"
                        )}
                        {this.renderExternalLink(
                          "http://www.davidflanagan.com",
                          "David Flanagan"
                        )}
                        {this.renderExternalLink(
                          "http://howjavascriptworks.com/",
                          "How JavaScript Works"
                        )}
                        {this.renderExternalLink(
                          "https://medium.com/@jsmuster/awesome-es6-features-by-example-58974b356955",
                          "Awesome ES6 Features By Example"
                        )}
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span /> React.js / Redux
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                      {this.renderExternalLink(
                          "https://kentcdodds.com/blog",
                          "Kent C. Dodds blog"
                        )}
                      {this.renderExternalLink(
                          "https://css-tricks.com/using-react-portals-to-render-children-outside-the-dom-hierarchy/",
                          "Using React Portals to Render Children Outside the DOM Hierarchy"
                        )}
                        {this.renderExternalLink(
                          "https://medium.com/@jsmuster/understanding-reducers-d0f934aceccd",
                          "Understanding Reducers from scratch"
                        )}
                        {this.renderExternalLink(
                          "https://medium.com/@jsmuster/using-redux-standalone-497aa85981c1",
                          "Using Redux standalone"
                        )}
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span /> AWS
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        {this.renderExternalLink(
                          "https://gist.github.com/stevekinney/6ab02582829f039b6a14c973923909f8",
                          "AWS for Frontend Engineers"
                        )}
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span /> HTML5
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                      {this.renderExternalLink(
                          "http://html5boilerplate.com/",
                          "HTML5 Boilerplate"
                        )}
                       {this.renderExternalLink(
                          "http://html5doctor.com/avoiding-common-html5-mistakes/",
                          "Avoiding Common HTML5 Mistakes"
                        )}
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span /> CSS3
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                      {this.renderExternalLink(
                          "http://csszengarden.com",
                          "CSS Zen Garden"
                        )}
                      {this.renderExternalLink(
                          "https://medium.freecodecamp.org/web-fonts-in-2018-f191a48367e8",
                          "How to load web fonts to avoid performance issues and speed up page loading"
                        )}
                      {this.renderExternalLink(
                          "http://www.google.com/webfonts/",
                          "Google Web Fonts"
                        )}
                       {this.renderExternalLink(
                          "http://www.hongkiat.com/blog/beautiful-free-fonts-for-titles-and-headlines/",
                          "Fonts for Titles and Headlines"
                        )}
                        {this.renderExternalLink(
                          "https://www.sarasoueidan.com/blog/hex-rgb-to-hsl/",
                          "On Switching from HEX & RGB to HSL"
                        )}
                        {this.renderExternalLink(
                          "https://speckyboy.com/css-background-effects/",
                          "10 Snippets for Creating Unique Background Effects with CSS"
                        )}
                        
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span /> Web Design Inspitation Resources
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                      {this.renderExternalLink(
                          "https://smashingmagazine.com/",
                          "Smashing Magazine"
                        )}
                        {this.renderExternalLink(
                          "https://www.mdgadvertising.com/resources-and-tools-for-designers/",
                          "Resources and Tools for Designers"
                        )}
                       {this.renderExternalLink(
                          "https://99designs.com/blog/trends/web-design-trends-2019/",
                          "Current Web Design Trends"
                        )}
                       {this.renderExternalLink(
                          "http://www.flickr.com/photos/splat/collections/72157600060481506/",
                          "Patrick Haney&quot;s collection"
                        )}
                        {this.renderExternalLink(
                          "http://www.flickr.com/groups/webdesign-inspiration/",
                          "Web Design Inspiration flickr Pool"
                        )}
                       {this.renderExternalLink(
                          "http://vandelaydesign.com/blog/design/flickr-groups-for-designers/",
                          "Vandelay Design's list of 99 Flickr groups for design inspiration."
                        )}
                       {this.renderExternalLink(
                          "https://zurb.com/",
                          "UI Examples"
                        )}
                        {this.renderExternalLink(
                          "http://factoryjoe.com/",
                          "Chris Messina's web site"
                        )}
                        {this.renderExternalLink(
                          "http://www.flickr.com/photos/factoryjoe/collections/72157600001823120/",
                          "Collection of UI Design on Flickr by Chris Messina"
                        )}
                       {this.renderExternalLink(
                          "http://designreviver.com/",
                          "Design Reviver"
                        )}
                       {this.renderExternalLink(
                          "http://www.lukew.com/resources/web_form_design.asp",
                          " Web Form Design"
                        )}
                        {this.renderExternalLink(
                          "http://colorschemedesigner.com/",
                          "Color Schema Designer"
                        )}
                       {this.renderExternalLink(
                          "https://color.adobe.com/create",
                          "Adobe Kuler Color Schema"
                        )}
                       {this.renderExternalLink(
                          "http://www.webdesignerwall.com/tutorials/css-decorative-gallery/",
                          "Border Styles for Images"
                        )}
                       {this.renderExternalLink(
                          "http://www.sitepoint.com/article/eight-definitive-font-stacks/",
                          "Typography on the Web"
                        )}
                       {this.renderExternalLink(
                          "http://mezzoblue.com/tests/revised-image-replacement/",
                          "Revised Image Replacement"
                        )}
                       {this.renderExternalLink(
                          "https://kilianvalkhof.com/2017/design/sloped-edges-with-consistent-angle-in-css/",
                          "Sloped Edges With Consistent Angle in CSS"
                        )}
                        {this.renderExternalLink(
                          "https://css-tricks.com/creating-non-rectangular-headers/",
                          "Creating Non-Rectangular Headers"
                        )}
                        {this.renderExternalLink(
                          "http://simplebits.com/",
                          "Examples of decorative fonts"
                        )}
                        {this.renderExternalLink(
                          "http://ilovetypography.com",
                          "I Love Typography"
                        )}
                        {this.renderExternalLink(
                          "http://designr.it",
                          "Example of decorative text"
                        )}
                        {this.renderExternalLink(
                          "http://www.alistapart.com/articles/writingainterfacestyleguide/",
                          "Writing an Interface Style Guide"
                        )}
                       {this.renderExternalLink(
                          "http://3oneseven.com/23/milo-web-design-expertise/",
                          "Milo Web Design"
                        )}
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span /> Photography
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        {this.renderExternalLink(
                          "http://digital-photography-school.com/",
                          "Digital Photography School"
                        )}
                        {this.renderExternalLink(
                          "http://24ways.org/",
                          "24ways.org"
                        )}
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
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
