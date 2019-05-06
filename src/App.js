import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Router } from "@reach/router";
import styled from "styled-components";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import TODO from "./pages/TODO";

/*
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Photogalleries from "./pages/Photogalleries";
import Game from "./pages/Game";
*/

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
          <Skills path="/skills" />
          <Links path="/links" />
          <Contact path="/contact" />
          <TODO path="/TODO" />
        </Router>
      </Wrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
