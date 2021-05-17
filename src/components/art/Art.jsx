import React from "react";
import Content from "./Content";
import Video from "./Video";
/* import Dollarbill from "./Dollarbill"; */
import "../../styles/general-styles.css";
import "./art-styles.css";

const Art = () => {
  return (
    <section id="art">
      <Content />
      <Video />
      {/*       <Dollarbill /> */}
    </section>
  );
};

export default Art;
