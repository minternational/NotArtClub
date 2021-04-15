import React from "react";
import logo from "../images/logo_footer.png";
import "../styles/styles.css";

const Navigation = () => {
  return (
    <section id="navigation">
      {/*       <div className="container fluid"> */}
      <nav className="navbar navbar-expand-lg">
        <img id="nav-logo" src={logo} alt="not-art-club-logo"></img>
        <button
          className="navbar-toggler"
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
              <a className="nav-link" href="localhost:3000">
                News <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                href="localhost:3000"
                data-toggle="dropdown"
                //aria-haspopup="true"
                aria-expanded="false">
                The Project
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="localhost:3000">
                  100 Dollar Bill
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">
                The Art
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">
                The Artists
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="localhost:3000">
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
