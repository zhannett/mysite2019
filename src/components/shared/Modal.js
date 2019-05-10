import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

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
