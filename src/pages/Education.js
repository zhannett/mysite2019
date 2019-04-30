import React, { Component } from "react";
import styled from "@emotion/styled";

import * as Layout from "../components/shared/Layout";
import W3C from "../components/shared/W3C";
import Header from "../components/shared/Header";
import TopNav from "../components/shared/TopNav";

const List = styled.ul`
  list-style-type: none;
  li {
    list-style-type: none;
    background: url(data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7)
      no-repeat left top;
    padding: 0 0 4px 24px;
  }
`;

class Education extends Component {
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
          <Layout.H1>Education</Layout.H1>
          <NewWindow
            num={this.state.newwin}
            toggleCheckboxChange={this.toggleCheckboxChange}
          />
          <ul id="institutions" className="img_list">
            <li>
              <a
                href="http://www.aodt.ca/"
                target={this.state.newwin ? "_blank" : "_self"}
              >
                International Academy of Design and Technology
              </a>
              <h4>Diploma, e-Commerce Solutiod;sfkdlsfns Defveloper</h4>
              <img
                src="http://janetkulyk.s3.amazonaws.com/img/logo_iaod.gif"
                width="411"
                height="73"
                alt="International Academy of Design and Technology"
              />
            </li>
            <li>
              <div className="logo_edu">
                <img
                  src="http://janetkulyk.s3.amazonaws.com/img/logo_kgu.png"
                  alt="National Taras Shevchenko University of Kyiv"
                  width="120"
                  height="120"
                />
              </div>
              <div className="name_edu">
                <a href="http://www.univ.kiev.ua/en/">
                  National Taras Shevchenko University of Kyiv
                </a>
                <h4>Diploma, Fiber Optics Communication Systems</h4>
              </div>
            </li>
            <li>
              <div className="logo_edu">
                <img
                  src="http://janetkulyk.s3.amazonaws.com/img/logo_kpi.png"
                  alt='National Technical University of Ukraine "KPI"'
                  width="100"
                  height="94"
                />
              </div>
              <div className="name_edu">
                <a href="https://kpi.ua/en">
                  National Technical University of Ukraine &quot;KPI&quot;
                </a>
                <h4>M.Sc., Electrical Engineering</h4>
              </div>
            </li>
          </ul>
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com/education.php"
            scrolling="no"
            frameBorder="0"
            style={{ border: "none", width: "450px", height: "80px" }}
          />
        </main>
        <aside className="right-sidebar">
          <blockquote>All great things require great dedication.</blockquote>
          <blockquote>
            The mind is slow to unlearn what it learnt early.
            <cite>Seneca</cite>
          </blockquote>
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

export default Education;
