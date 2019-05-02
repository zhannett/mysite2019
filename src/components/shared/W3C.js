import React, {Component} from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

import IconCodePen from "../../svgComponents/IconCodePen";
import IconGithub from "../../svgComponents/IconGithub";
import IconReact from "../../svgComponents/IconReact";
import IconCloud from "../../svgComponents/IconCloud";

const Wrapper = styled.div`
  display: flex;
  a,
  a:visited {
    color: #444;
  }
  a:hover {
    color: #fff;
  }
  a:active {
    color: #000;
    background-color: transparent;
  }
  a:hover:before {
    background: transparent;
  }
`;

const portalRoot = document.getElementById("portal");

class W3C extends Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false
    };

    this.setupRefs();
    this.setupEvents();
  }

  setupRefs() {
    this.toolTip = React.createRef();
}

setupEvents() {
    this.createBtn = this.createBtn.bind(this);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
}

handleOnMouseOut(evt) {
    this.toolTip.current.hide();
}

handleOnMouseOver(evt) {
    // get hovered element reference
    let el = evt.currentTarget;
    
    if (el !== null) {
        let rect = el.getBoundingClientRect();
        this.toolTip.current.show(rect);
    }
}
createBtn(id, obj) {
  var {handleOnMouseOver, handleOnMouseOut} = this;
  
  return (
    <div id={id} onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>{obj}</div>
  )
}
  
render() {
  const { on } = this.state;
  let {createBtn} = this;

  return (
    <Wrapper>
      <div>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener"
          alt="React.js"
          aria-label="React.js"
        >
          <div style={{ width: "64px", height: "64px", background: "#000" }}>
            <IconReact />
          </div>
        </a>

        <a
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noopener"
          style={{ color: "#fff" }}
          alt="Amazon Web Services"
          aria-label="Amazon Webservices"
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#000",
              marginTop: "24px",
              writingMode: 'horizontal-tb'
            }}
          >
            <IconCloud />
            <span
              style={{
                display: 'inline-block',
                width: '40px',
                position: "absolute",
                top: "20px",
                left: "10px",
                fontSize: "16px",
                color: "#fff"
              }}
            >
              AWS
            </span>
          </div>
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener"
          alt="Github"
          aria-label="Github"
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#000",
              marginTop: "24px"
            }}
          >
            <IconGithub />
          </div>
        </a>

        <a
          href="https://codepen.io/"
          target="_blank"
          rel="noopener"
          alt="CodePen"
          aria-label="CodePen"
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#000",
              paddingTop: "8px",
              marginTop: "24px"
            }}
          >
            <IconCodePen />
          </div>
        </a>

        <a
          href="https://www.styled-components.com/"
          target="_blank"
          rel="noopener"
          alt="styled-components"
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              background: "#000",
              paddingTop: "12px",
              marginTop: "16px"
            }}
          >
            <img
              src="https://www.styled-components.com/static/icon.png"
              width="56"
              height="26"
              alt="styled-components"
            />
          </div>
        </a>
      </div>
      <p className="vertical-text">Used technologies</p>
    </Wrapper>
  );
} 
};

export default W3C;
