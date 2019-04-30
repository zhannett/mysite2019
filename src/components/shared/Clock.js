import React from "react";
import styled from "@emotion/styled";

const DateTime = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: #444;
`;

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString("en-US", options),
      time: new Date().toLocaleTimeString("en-US", { hour12: false })
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      date: new Date().toLocaleDateString("en-US", options),
      time: new Date().toLocaleTimeString("en-US", { hour12: false })
    });
  }

  render() {
    return (
      <DateTime>
        <div>{this.state.date}</div>
        <div style={{ width: "72px", paddingLeft: "16px", textAlign: "left" }}>
          {this.state.time}
        </div>
      </DateTime>
    );
  }
}

export default Clock;
