import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

/*

.overlay {
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.95);
  height: 100vh;
  width: 100vw;
  z-index: 999;
}

.modal-content {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.close {
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  background: none;
  border: 0;
}
*/

const modalRoot = document.getElementById("root");

export default class Modal extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
// This component does nothing else than creating a div and mouting it as a child of #root into our DOM.
