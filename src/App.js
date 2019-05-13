import React, { Component, lazy, Suspense } from "react";
import ReactDOM, { render } from "react-dom";
import { Router } from "@reach/router";
import styled from "styled-components";

import Home from "./pages/Home";
import TODO from "./pages/TODO";

/*
import Education from "./pages/Education";
import Portfolio from "./pages/Portfolio";
import Photogalleries from "./pages/Photogalleries";
import Game from "./pages/Game";
*/

const Services = lazy(() => import("./pages/Services"));
const Skills = lazy(() => import("./pages/Skills"));
const Links = lazy(() => import("./pages/Links"));
const Contact = lazy(() => import("./pages/Contact"));

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
      <>
        {/*<React.StrictMode>*/}
        <Wrapper>
          <Suspense
            fallback={
              <div
                style={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1IiBoZWlnaHQ9IjEzNSIgdmlld0JveD0iMCAwIDEzNSAxMzUiIHhtbG5z&#13;&#10;PSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2ZmZiI+CiAgICA8cGF0aCBkPSJN&#13;&#10;NjcuNDQ3IDU4YzUuNTIzIDAgMTAtNC40NzcgMTAtMTBzLTQuNDc3LTEwLTEwLTEwLTEwIDQuNDc3&#13;&#10;LTEwIDEwIDQuNDc3IDEwIDEwIDEwem05LjQ0OCA5LjQ0N2MwIDUuNTIzIDQuNDc3IDEwIDEwIDEw&#13;&#10;IDUuNTIyIDAgMTAtNC40NzcgMTAtMTBzLTQuNDc4LTEwLTEwLTEwYy01LjUyMyAwLTEwIDQuNDc3&#13;&#10;LTEwIDEwem0tOS40NDggOS40NDhjLTUuNTIzIDAtMTAgNC40NzctMTAgMTAgMCA1LjUyMiA0LjQ3&#13;&#10;NyAxMCAxMCAxMHMxMC00LjQ3OCAxMC0xMGMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwek01OCA2Ny40&#13;&#10;NDdjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMHMtMTAgNC40NzctMTAgMTAgNC40NzcgMTAgMTAgMTAg&#13;&#10;MTAtNC40NzcgMTAtMTB6Ij4KICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybQogICAgICAgICAgICBh&#13;&#10;dHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgICAgICAgICAgIHR5cGU9InJvdGF0ZSIKICAgICAg&#13;&#10;ICAgICAgZnJvbT0iMCA2NyA2NyIKICAgICAgICAgICAgdG89Ii0zNjAgNjcgNjciCiAgICAgICAg&#13;&#10;ICAgIGR1cj0iMi41cyIKICAgICAgICAgICAgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KICAg&#13;&#10;IDwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0yOC4xOSA0MC4zMWM2LjYyNyAwIDEyLTUuMzc0IDEyLTEy&#13;&#10;IDAtNi42MjgtNS4zNzMtMTItMTItMTItNi42MjggMC0xMiA1LjM3Mi0xMiAxMiAwIDYuNjI2IDUu&#13;&#10;MzcyIDEyIDEyIDEyem0zMC43Mi0xOS44MjVjNC42ODYgNC42ODcgMTIuMjg0IDQuNjg3IDE2Ljk3&#13;&#10;IDAgNC42ODYtNC42ODYgNC42ODYtMTIuMjg0IDAtMTYuOTctNC42ODYtNC42ODctMTIuMjg0LTQu&#13;&#10;Njg3LTE2Ljk3IDAtNC42ODcgNC42ODYtNC42ODcgMTIuMjg0IDAgMTYuOTd6bTM1Ljc0IDcuNzA1&#13;&#10;YzAgNi42MjcgNS4zNyAxMiAxMiAxMiA2LjYyNiAwIDEyLTUuMzczIDEyLTEyIDAtNi42MjgtNS4z&#13;&#10;NzQtMTItMTItMTItNi42MyAwLTEyIDUuMzcyLTEyIDEyem0xOS44MjIgMzAuNzJjLTQuNjg2IDQu&#13;&#10;Njg2LTQuNjg2IDEyLjI4NCAwIDE2Ljk3IDQuNjg3IDQuNjg2IDEyLjI4NSA0LjY4NiAxNi45NyAw&#13;&#10;IDQuNjg3LTQuNjg2IDQuNjg3LTEyLjI4NCAwLTE2Ljk3LTQuNjg1LTQuNjg3LTEyLjI4My00LjY4&#13;&#10;Ny0xNi45NyAwem0tNy43MDQgMzUuNzRjLTYuNjI3IDAtMTIgNS4zNy0xMiAxMiAwIDYuNjI2IDUu&#13;&#10;MzczIDEyIDEyIDEyczEyLTUuMzc0IDEyLTEyYzAtNi42My01LjM3My0xMi0xMi0xMnptLTMwLjcy&#13;&#10;IDE5LjgyMmMtNC42ODYtNC42ODYtMTIuMjg0LTQuNjg2LTE2Ljk3IDAtNC42ODYgNC42ODctNC42&#13;&#10;ODYgMTIuMjg1IDAgMTYuOTcgNC42ODYgNC42ODcgMTIuMjg0IDQuNjg3IDE2Ljk3IDAgNC42ODct&#13;&#10;NC42ODUgNC42ODctMTIuMjgzIDAtMTYuOTd6bS0zNS43NC03LjcwNGMwLTYuNjI3LTUuMzcyLTEy&#13;&#10;LTEyLTEyLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTJzNS4zNzQgMTIgMTIgMTJjNi42MjggMCAxMi01&#13;&#10;LjM3MyAxMi0xMnptLTE5LjgyMy0zMC43MmM0LjY4Ny00LjY4NiA0LjY4Ny0xMi4yODQgMC0xNi45&#13;&#10;Ny00LjY4Ni00LjY4Ni0xMi4yODQtNC42ODYtMTYuOTcgMC00LjY4NyA0LjY4Ni00LjY4NyAxMi4y&#13;&#10;ODQgMCAxNi45NyA0LjY4NiA0LjY4NyAxMi4yODQgNC42ODcgMTYuOTcgMHoiPgogICAgICAgIDxh&#13;&#10;bmltYXRlVHJhbnNmb3JtCiAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIKICAg&#13;&#10;ICAgICAgICAgdHlwZT0icm90YXRlIgogICAgICAgICAgICBmcm9tPSIwIDY3IDY3IgogICAgICAg&#13;&#10;ICAgICB0bz0iMzYwIDY3IDY3IgogICAgICAgICAgICBkdXI9IjhzIgogICAgICAgICAgICByZXBl&#13;&#10;YXRDb3VudD0iaW5kZWZpbml0ZSIvPgogICAgPC9wYXRoPgo8L3N2Zz4K"
                  width="100"
                  height="100"
                />
              </div>
            }
          >
            <Router>
              <Home path="/" />
              <Services path="/services" />
              <Skills path="/skills" />
              <Links path="/links" />
              <Contact path="/contact" />
              <TODO path="/TODO" />
            </Router>
          </Suspense>
        </Wrapper>
        {/*</React.StrictMode>*/}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
