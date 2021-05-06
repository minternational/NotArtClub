import React from "react";
import header1 from "../images/placeholder_carousel.jpg";
import "../styles/general-styles.css";
import "./main-styles.css";
import header2 from "../images/placeholder_carousel2.jpg";
import header3 from "../images/placeholder_carousel3.jpg";
import header4 from "../images/placeholder_carousel4.jpg";

const Header = () => {
  return (
    <section id="header">
      <div
        id="carouselIndicators"
        className="carousel slide"
        data-interval="5000"
        data-pause="hover"
        data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#carouselIndicators"
            data-slide-to="0"
            className="active indicator"></li>
          <li
            className="indicator"
            data-target="#carouselIndicators"
            data-slide-to="1"></li>
          <li
            className="indicator"
            data-target="#carouselIndicators"
            data-slide-to="2"></li>
          <li
            className="indicator"
            data-target="#carouselIndicators"
            data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block img-fluid"
              src={header1}
              alt="First slide"></img>
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              src={header2}
              alt="Second slide"></img>
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              src={header3}
              alt="Third slide"></img>
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid"
              src={header4}
              alt="Third slide"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
