import React from "react";
import logo from "../images/placeholder_carousel.jpg";
import "../styles/general-styles.css";
import "./main-styles.css";

const Header = () => {
  return (
    <section id="header">
      <div className="column">
        <img id="header-img" src={logo} alt="not-art-club-logo"></img>
        <hr />
      </div>
    </section>
  );
};

export default Header;
