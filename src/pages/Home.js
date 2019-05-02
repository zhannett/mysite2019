import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import Welcome from "../components/Welcome";
// import LatestProjects from "../components/LatestProjects";
import * as Layout from "../components/shared/Layout";
import W3C from "../components/shared/W3C";
import Header from "../components/shared/Header";
import media from "../mediaTemplate";

class Home extends Component {
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
          <Welcome />

          {/*<LatestProjects />*/}
          {/*
            <iframe
              src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com"
              scrolling="no"
              frameBorder="0"
              style={{ border: "none", width: "100%", height: "80px" }}
            */}
        </main>

        <aside className="right-sidebar">
          <div>
            <blockquote>
              <span className="first-letter">B</span>e yourself, everyone else
              is already taken.
              <cite>Oscar Wilde</cite>
            </blockquote>
            <blockquote>
              <span className="first-letter">T</span>he greatest glory is not in
              never failing, but in rising up every time we fall.
              <cite>
                Confucius,
                <br />
                551 BC – 479 BC
              </cite>
            </blockquote>

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
          </div>
        </aside>
      </div>
    );
  }
}

export default Home;
