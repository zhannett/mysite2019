import React from "react";

import * as Layout from "./Layout";
import LinkedIn from "../../svgComponents/LinkedIn";

const LinkedInLink = () => {
  return (
    <a
      href="https://www.linkedin.com/in/janetkulyk/"
      rel="noopener"
      target="_blank"
      title="Janet Kulyk's LinkedIn Profile"
    >
      <Layout.LinkedInContainer>
        <LinkedIn />
      </Layout.LinkedInContainer>
    </a>
  );
};

export default LinkedInLink;
