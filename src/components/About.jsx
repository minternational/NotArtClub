import React from "react";
import "../styles/styles.css";

const About = () => {
  return (
    <section id="about">
      <div className="container-fluid">
        <div className="row">
          <div id="about-col" className="col-lg-6">
            <h1>
              <p id="about-paragraph">
                100 artists from around the world, as a collective ; 100 stories
              </p>
            </h1>
          </div>
          <div className="col-lg-6">
            <img
              id="placeholder_about"
              src="https://picsum.photos/600/300"
              alt="placeholder"></img>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <button className="btn btn-dark about-btn">
        Discover our Vision & Mission{" "}
        <i className="fas fa-long-arrow-alt-right"></i>
      </button>
    </section>
  );
};

export default About;
