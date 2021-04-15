import React from "react";
import placeholder from "../images/placeholder_about.JPG";
import "../styles/styles.css";

const About = () => {
  return (
    <section id="about">
      <div className="container-fluid">
        <div className="row">
          <div id="about-col" className="col-lg-6">
            <h1>
              <p>100 artists from around the world, as a collective ;</p>
              <p>100 stories</p>
            </h1>
          </div>
          <div className="col-lg-6">
            <img
              id="placeholder_about"
              src={placeholder}
              alt="placeholder"></img>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <button className="btn btn-dark">
        Discover our Vision & Mission{" "}
        <i className="fas fa-long-arrow-alt-right"></i>
      </button>
    </section>
  );
};

export default About;
