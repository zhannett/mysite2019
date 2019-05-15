import React, { Component } from "react";
import styled from "styled-components";

import media from "../mediaTemplate";
import Layout from "../components/shared/Layout";

class NewWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: true
    };

    this.handleCheckboxState = this.handleCheckboxState.bind(this);
  }

  handleCheckboxState() {
    this.setState({ checked: !this.state.checked }, () => {
      this.props.onCheckboxChange(this.state.checked);
    });
  }

  render() {
    return (
      <form form-action="self">
        <fieldset style={{ border: "none" }}>
          <label htmlFor="newwin">
            <input
              type="checkbox"
              onChange={this.handleCheckboxState}
              checked={this.state.checked}
              style={{ verticalAlign: "middle", marginRight: "8px" }}
            />
            Open links in new window?
          </label>
        </fieldset>
      </form>
    );
  }
}

export default NewWindow;
