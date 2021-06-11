import React from "react";
import Content from "./Content";
import Video from "./Video";
import { Link } from "react-router-dom";
import "../../styles/general-styles.css";
import "./art-styles.css";

const Art = () => {
  return (
    <section id="art">
      <Content />
      <Video />

      <Link className="react-link" to="/dollarbill">
        <button id="button" className="btn buttonReveal">
          Discover our final piece in full glance (300MB)
        </button>
      </Link>
    </section>
  );
};

export default Art;
