import React from "react";
import Content from "./Content";
import Video from "./Video";
import "../../styles/general-styles.css";
import "./art-styles.css";
/* import Dollarbill from "./Dollarbill"; */
/* const Dollarbill = lazy(() => import("./Dollarbill")); */

const Art = () => {
  return (
    <section id="art">
      <Content />
      <Video />
      {/* <Dollarbill /> */}
    </section>
  );
};

export default Art;
