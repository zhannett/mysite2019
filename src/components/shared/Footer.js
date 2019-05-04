import React from "react";
import styled from "styled-components";

const Copyright = styled.div``;

const Footer = () => {
  return (
    <footer className="footer">
      <Copyright>
        &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
      </Copyright>
    </footer>
  );
};

export default Footer;
