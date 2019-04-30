import React, { Component } from "react";
import styled from "styled-components";

import media from "../../mediaTemplate";

const Fieldset = styled.fieldset`
  padding: 0.25rem 0;
  margin: 0 0 1rem 1rem;
  border: none;
  ${media.phone`
    margin-bottom: 0;
  `};
`;

class NewWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newwin: false
    };

    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox() {
    this.setState({ newwin: !this.state.newwin });
  }

  render() {
    return (
      <div data-behavior="linksInNewWindow">
        <form id="newwindowlinks">
          <Fieldset>
            <input
              type="checkbox"
              value={this.state.newwin}
              onChange={this.toggleCheckbox}
              checked
            />
            <label htmlFor="newwin" style={{ fontSize: "medium" }}>
              Open links in new window?
            </label>
          </Fieldset>
        </form>
      </div>
    );
  }
}

export default NewWindow;
