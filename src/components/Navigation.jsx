import React from "react";

const Navigation = () => {
  return (
    <section id="navigation">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Not Art Club
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                News <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                The Project
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">
                  100 Dollar Bill
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                The Art
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                The Artists
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
