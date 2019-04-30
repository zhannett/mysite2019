import React, { Component } from "react";
import styled from "@emotion/styled";

import * as Layout from "../components/shared/Layout";
import media from "../mediaTemplate";

class LatestProjects extends Component {
  render() {
    return (
      <div className="latest_projects" data-behavior="modal">
        <h2>Latest Public Projects</h2>

        <article id="jwplayerdemo" className="title_jwplayer">
          <a href="demo_jwplayer/index.php" className="modal">
            <img
              src="http://janetkulyk.s3.amazonaws.com/img/logo_pialaw.png"
              alt="logo www.pialaw.ca"
            />
          </a>
          Image rotator with built-in video: HTML5 &lt;video&gt; with fallback
          to Flash player:{" "}
          <a href="http://www.pialaw.ca" className="link">
            www.pialaw.ca
          </a>
          .
        </article>
        <article className="title_my_mobile">
          <img
            src="http://janetkulyk.s3.amazonaws.com/img/qr-jk-mobile.png"
            alt="QRCode"
          />
          Personal web mobile site; works on all mobile browsers including
          ancient ones{" "}
          <a href="mobile/" className="link" target="_blank">
            m.janetkulyk.com
          </a>
          .
        </article>
      </div>
    );
  }
}

export default LatestProjects;
