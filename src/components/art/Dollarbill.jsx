import React from "react";
import dollarbill from "./images/dollar_placeholder.jpg";
import "./styles_art.css";

const Dollarbill = () => {
  return (
    <section id="dollarbill">
      <h3 id="enlarge">Click on any piece to enlarge</h3>
      <img id="dollar-image" src={dollarbill} alt="dollarbill"></img>
    </section>
  );
};

export default Dollarbill;
