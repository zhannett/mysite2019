import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Router } from "@reach/router";
// import { jsx, css } from "@emotion/core";
import styled from "styled-components";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Links from "./pages/Links";
import Photogalleries from "./pages/Photogalleries";
import Game from "./pages/Game";

const Wrapper = styled.div`
  background: line-gradient(90deg, #2743c0, #ea639e);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };
    // this.toggleTheme = this.toggleTheme.bind(this);
  }
  /*
    toggleTheme() {
        const theme = this.state.theme === 'dark' ? 'light' : 'dark';
        this.setState({ darkTheme: theme });
        document.documentElement.setAttribute("data-theme", theme);
    }
*/
  render() {
    return (
      <Wrapper>
        <Router>
          <Home path="/" />
          <Services path="/services" />
          <Contact path="/contact" />
          <Education path="/education" />
          <Skills path="/skills" />
          <Portfolio path="/portfolio" />
          <Links path="/links" />
          <Photogalleries path="/photogallieries" />
          <Game path="/game" />
        </Router>
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
