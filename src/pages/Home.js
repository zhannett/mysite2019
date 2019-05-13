import React, { Component } from "react";
import styled from "styled-components";
import { Link, navigate } from "@reach/router";

import Welcome from "../components/Welcome";
// import LatestProjects from "../components/LatestProjects";
import * as Layout from "../components/shared/Layout";
import W3C from "../components/shared/W3C";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import media from "../mediaTemplate";
import LinkedIn from "../svgComponents/LinkedIn";
import "../assets/css/app.css";
import Modal from "../components/shared/Modal";
import CloseSmall from "../svgComponents/CloseSmall";

const FirstLetter = styled.span`
  font-size: 2rem;
  line-height: 0.7;
  color: var(--color-tomato);
  font-family: "Rouge Script";
`;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: ""
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    console.log(e.target);
    console.log(e.target.dataset.url);
    this.setState(
      {
        showModal: !this.state.showModal,
        url: e.target.dataset.url
      },
      () => {
        console.log(this.state.showModal);
        console.log(this.state.url);
      }
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
          <div>
            <Welcome />
            {/*<LatestProjects />*/}
            {/*
            <iframe
              src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com"
              scrolling="no"
              frameBorder="0"
              style={{ border: "none", width: "100%", height: "80px" }}
            */}
          </div>
        </main>

        <Footer />

        <aside className="right-sidebar">
          <div>
            <blockquote>
              <FirstLetter>B</FirstLetter>e yourself, everyone else is already
              taken.
              <cite>Oscar Wilde</cite>
            </blockquote>
            <blockquote>
              <FirstLetter>T</FirstLetter>he greatest glory is not in never
              failing, but in rising up every time we fall.
              <cite>
                Confucius,
                <br />
                551 BC – 479 BC
              </cite>
            </blockquote>
            {/*
            <button onClick={this.toggleModal}>
              <img
                src="http://janetkulyk.s3.amazonaws.com/img/ad_css3_125x125.png"
                alt="CSS3 Demo: Kinetic Typography"
                data-url="../assets/video/kinetic-typography-video/index.html"
                style={{ cursor: "pointer" }}
              />
            </button>
*/}
            {/*
            <div className="title_css3_demo">
              <a
                href="../assets/video/kinetic-typography-video/"
                target="_blank"
                aria-label="CSS3 Demo: Kinetic Typography"
              >
                <img
                  src="http://janetkulyk.s3.amazonaws.com/img/ad_css3_125x125.png"
                  alt="CSS3 Demo: Kinetic Typography"
                />
              </a>
            </div>
            */}

            {this.state.showModal ? (
              <Modal>
                <button onClick={this.toggleModal} className="close">
                  <CloseSmall />
                </button>
                <iframe
                  src="http://zhannett.xyz"
                  scrolling="no"
                  frameBorder="0"
                  style={{ border: "none", width: "80%", height: "200px" }}
                />
                {/*<img src={this.state.url} style={{ width: "90%" }} title="" />*/}
              </Modal>
            ) : null}
          </div>
        </aside>
      </div>
    );
  }
}

export default Home;
