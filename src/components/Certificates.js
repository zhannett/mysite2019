import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Link } from "@reach/router";
import styled from "@emotion/styled";

import * as Layout from "../components/shared/Layout";
import Modal from "../components/shared/Modal";
import media from "../mediaTemplate";
import Remote from "../assets/img/remote.gif";
import RemoteA from "../assets/img/remote_a.gif";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
`;

const ExternalLink = styled.div`
  display: inline;
  padding-left: 16px;
  background: rgb(248, 248, 248) url(${Remote}) no-repeat 4px 6px;
  ${media.phone`
    flex-direction: column;
  `};
  &:hover {
    background: rgb(248, 248, 248) url(${RemoteA}) no-repeat 4px 6px;
  }
`;

const CertificatesWrapper = styled.div`
  ul {
    list-style: none;
    li span {
      font-size: large;
      background: rgb(248, 248, 248);
    }
  }
  button {
    background: rgb(248, 248, 248);
    border-width: 0;
    cursor: pointer;
    font-size: large;
    color: var(--color-cornflowerblue);
    &:hover {
      color: var(--color-tomato);
    }
  }
`;

const ToggleContent = ({ toggle, content }) => {
  const [isShown, setIsShown] = React.useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);
  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

class Certificates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: ""
    };

    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleCheckboxChange() {
    this.setState({ newwin: !this.state.newwin });
  }

  toggleModal(e) {
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
      <div>
        <Layout.H1>Certificates</Layout.H1>
        <CertificatesWrapper>
          <ul data-behavior="smartLinks" style={{ paddingLeft: 0 }}>
            <li>
              <span>
                <strong>2005</strong> -{" "}
              </span>
              <ExternalLink>
                <button onClick={this.toggleModal}>
                  <span data-url="http://janetkulyk.s3.amazonaws.com/img/certificates/css.jpg">
                    CSS2 Certificate
                  </span>
                </button>
              </ExternalLink>
            </li>
            <li>
              <span>
                <strong>2005</strong> -{" "}
              </span>
              <ExternalLink>
                <button onClick={this.toggleModal}>
                  <span data-url="http://janetkulyk.s3.amazonaws.com/img/certificates/xml.jpg">
                    XML Certificate
                  </span>
                </button>
              </ExternalLink>
            </li>
            <li>
              <span>
                <strong>2005</strong> -{"  "}
              </span>
              <ExternalLink>
                <button onClick={this.toggleModal}>
                  <span data-url="http://janetkulyk.s3.amazonaws.com/img/certificates/php.jpg">
                    PHP4 Certificate
                  </span>
                </button>
              </ExternalLink>
            </li>
            <li>
              <span>
                <strong>2005</strong> - {"  "}
              </span>
              <ExternalLink>
                <button onClick={this.toggleModal}>
                  <span data-url="http://janetkulyk.s3.amazonaws.com/img/certificates/js.jpg">
                    JavaScript Certificate
                  </span>
                </button>
              </ExternalLink>
            </li>
            <li>
              <span>
                <strong>2002</strong> -{" "}
              </span>
              <ExternalLink>
                <button onClick={this.toggleModal}>
                  <span data-url="http://janetkulyk.s3.amazonaws.com/img/certificates/oracle.jpg">
                    SQL and PL/SQL Certificate
                  </span>
                </button>
              </ExternalLink>
            </li>
            <li>
              <span>
                <strong>2000</strong> -{" "}
              </span>
              <ExternalLink>
                <button onClick={this.toggleModal}>
                  <span data-url="http://janetkulyk.s3.amazonaws.com/img/certificates/sql.jpg">
                    MS SQL Server 6.5 Certificate
                  </span>
                </button>
              </ExternalLink>
            </li>
          </ul>
        </CertificatesWrapper>

        {this.state.showModal ? (
          <Modal>
            <button onClick={this.toggleModal} className="close">
              Close
            </button>
            <div>
              <img src={this.state.url} style={{ width: "90%" }} title="" />
            </div>
          </Modal>
        ) : null}
        {/*<iframe src="https://www.facebook.com/plugins/like.php?href=http://www.janetkulyk.com/skills.php" scrolling="no" frameBorder="0" style="border:none; width:450px; height:80px"></iframe>*/}
      </div>
    );
  }
}

export default Certificates;
