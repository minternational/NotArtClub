import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "../styles/general-styles.css";
import "./main-styles.css";

const Navigation = () => {
  return (
    <section id="navigation">
      {/*       <div className="container-fluid"> */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link className="react-link" to="/">
          <img id="navi-logo" src={logo} alt="not-art-club-logo"></img>
        </Link>
        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link className="react-link" to="/news">
              <li className="nav-item nav-link">News</li>
            </Link>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                href="_"
                data-toggle="dropdown"
                //aria-haspopup="true"
                aria-expanded="false">
                The Project
              </a>
              <Link className="react-link" to="/art">
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink">
                  <div className="dropdown-item" href="_">
                    100 Dollar Bill
                  </div>
                </div>
              </Link>
            </li>
            <Link className="react-link" to="/artists">
              <li className="nav-item nav-link">Artists</li>
            </Link>
            <a
              className="react-link"
              href="https://foundation.app/@NotArtClub"
              target="_blank"
              rel="noopener noreferrer">
              <li className="nav-item nav-link">Foundation</li>
            </a>
            <a
              className="react-link"
              href="https://discord.com/invite/cXvjc2qJyj"
              target="_blank"
              rel="noopener noreferrer">
              <li className="nav-item nav-link">Discord</li>
            </a>
            <Link className="react-link" to="/presskit">
              <li className="nav-item nav-link">Press Kit</li>
            </Link>
          </ul>
        </div>
      </nav>
      {/*       </div> */}
    </section>
  );
};

export default Navigation;
