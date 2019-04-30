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
                        <li>
                          <ExternalLink>
                            <Link
                              to="http://w3.org"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              World Wide Web Consortium
                            </Link>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://validator.w3.org"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              W3C HTML Validation Service
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://caniuse.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Can I Use?
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://frontendmasters.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Frontend Masters
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://egghead.io/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Egg Head
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.sitepoint.com"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Site Point
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://developer.yahoo.com"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Yahoo Develolper Network
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.quirksmode.org"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              www.quirksmode.org
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.w3schools.com/browsers/browsers_stats.asp"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Browser Statistics
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="https://www.creativebloq.com/net-magazine"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Net Magazine
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://csszengarden.com"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              CSS Zen Garden
                            </a>
                          </ExternalLink>
                        </li>
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
                        <li>
                          <ExternalLink>
                            <a
                              href="http://javascript.crockford.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Douglas Crockford
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.davidflanagan.com"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              David Flanagan
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://howjavascriptworks.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              How JavaScript Works
                            </a>
                          </ExternalLink>
                        </li>
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
                        <li>
                          <ExternalLink>
                            <a
                              href="http://html5boilerplate.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              HTML5 Boilerplate
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://html5doctor.com/avoiding-common-html5-mistakes/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Avoiding Common HTML5 Mistakes
                            </a>
                          </ExternalLink>
                        </li>
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
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.google.com/webfonts/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Google Web Fonts
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.hongkiat.com/blog/beautiful-free-fonts-for-titles-and-headlines/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Fonts for Titles and Headlines
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://html5doctor.com/blockquote-q-cite/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Quote Punctuation
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://css-tricks.com/snippets/css/ribbon/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Ribbon
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              hre="http://tympanus.net/codrops/2012/07/25/modern-block-quote-styles/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Modern Blockquote Styles
                            </a>
                          </ExternalLink>
                        </li>
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
                        <li>
                          <ExternalLink>
                            <a
                              href="https://smashingmagazine.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Smashing Magazine
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="https://www.mdgadvertising.com/resources-and-tools-for-designers/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Resources and Tools for Designers
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="https://99designs.com/blog/trends/web-design-trends-2019/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Current Web Design Trends
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.flickr.com/photos/splat/collections/72157600060481506/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Patrick Haney&quot;s collection
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.flickr.com/groups/webdesign-inspiration/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Web Design Inspiration flickr Pool
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://vandelaydesign.com/blog/design/flickr-groups-for-designers/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Vandelay Design's list of 99 Flickr groups for
                              design inspiration.
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="https://zurb.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              UI Examples
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://factoryjoe.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Chris Messina's web site
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.flickr.com/photos/factoryjoe/collections/72157600001823120/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Collection of UI Design on Flickr by Chris Messina
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://designreviver.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Design Reviver
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.lukew.com/resources/web_form_design.asp"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Web Form Design
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://colorschemedesigner.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Color Schema Designer
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="https://color.adobe.com/create"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Adobe Kuler Color Schema
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.webdesignerwall.com/tutorials/css-decorative-gallery/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Border Styles for Images
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.sitepoint.com/article/eight-definitive-font-stacks/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Typography on the Web
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://mezzoblue.com/tests/revised-image-replacement/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Revised Image Replacement
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="https://kilianvalkhof.com/2017/design/sloped-edges-with-consistent-angle-in-css/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Sloped Edges With Consistent Angle in CSS
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="https://css-tricks.com/creating-non-rectangular-headers/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Creating Non-Rectangular Headers
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://simplebits.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Examples of decorative fonts
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://ilovetypography.com"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              I Love Typography
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://designr.it"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Example of decorative text
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://www.alistapart.com/articles/writingainterfacestyleguide/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Writing an Interface Style Guide
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://3oneseven.com/23/milo-web-design-expertise/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Milo Web Design
                            </a>
                          </ExternalLink>
                        </li>
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
                        <li />
                        <li>
                          <ExternalLink>
                            <a
                              href="http://digital-photography-school.com/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              Digital Photography School
                            </a>
                          </ExternalLink>
                        </li>
                        <li>
                          <ExternalLink>
                            <a
                              href="http://24ways.org/"
                              target={this.state.newwin ? "_blank" : "_self"}
                            >
                              24ways.org
                            </a>
                          </ExternalLink>
                        </li>
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
              Share your knowledge. It is a way to achieve immortality.
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
