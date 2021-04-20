import React from "react";
import logo from "../images/logo_footer.png";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section id="navigation">
      {/*       <div className="container fluid"> */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link to="/">
          <img id="nav-logo" src={logo} alt="not-art-club-logo"></img>
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
            <li className="nav-item">
              <a className="nav-link" href="#news">
                News <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                href="#projects"
                data-toggle="dropdown"
                //aria-haspopup="true"
                aria-expanded="false">
                The Project
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#100dollarbill">
                  100 Dollar Bill
                </a>
              </div>
            </li>
            <Link id="react-link" to="/art">
              <li className="nav-item nav-link">The Art</li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="#artists">
                The Artists
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/*       </div> */}
    </section>
  );
};

export default Navigation;
