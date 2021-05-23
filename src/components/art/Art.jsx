import React from "react";
import Countdown from "../countdown/Countdown";
import Content from "./Content";
import Video from "./Video";
import "../../styles/general-styles.css";
import "./art-styles.css";

const Art = () => {
  return (
    <section id="art">
      <Countdown
        timeTillDate="04 06 2021, 7:30 pm"
        timeFormat="DD MM YYYY, h:mm a"
      />
      <Content />
      <Video />
    </section>
  );
};

export default Art;
