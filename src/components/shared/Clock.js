import React, { useState, useEffect } from "react";
import styled from "styled-components";

import media from "../../mediaTemplate";

const DateTime = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  color: #444;
  font-size: small;
  ${media.tablet`
    display: none;
  `}
`;

const Time = styled.div`
  width: 72px;
  padding-left: 16px;
  text-align: left;
`;

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time, setTime]);

  return (
    <DateTime>
      <div>{new Date().toLocaleDateString("en-US", options)}</div>
      <Time>{time.toLocaleTimeString("en-US", { hour12: false })}</Time>
    </DateTime>
  );
};

export default Clock;
